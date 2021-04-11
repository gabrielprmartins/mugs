const openCepModalButton = document.querySelector('.cart-button');
const cartModal = document.querySelector('.cart');
const cloneCartModal = cartModal.cloneNode(true);
const cartList = document.querySelector('.cart-items');

const windowOnload = () => {
  window.location.reload();
}

const addEventReturnButton = () => {
  const returnButton = document.querySelector('[data-cep="return"]');
  returnButton.addEventListener('click', windowOnload);
};

const confirmDelivery = () => {
  cartModal.innerHTML = `
    <h1 class="title cart-title">Produto a caminho!</h1>
    <div class="confirm-delivery">
      <figure>
        <img src="img/shopping-truck.svg" alt="Caminhão de Vendas">
      </figure>
      <p class="paragraph">Obrigado por comprar conosco!</p>
      <button class="sell-button" data-cep="return">Realizar novas compras</button>
    </div>
  `;
  addEventReturnButton();
};

const disableInputCep = () => {
  const cepInput = document.querySelector('.search input');
  const searchButton = document.querySelector('.search-cep');
  cepInput.disabled = true;
  searchButton.disabled = true;
};

const addEventButtonCep = () => {
  disableInputCep();
  const confirm = document.querySelector('[data-cep="confirm"]');
  const cancel = document.querySelector('[data-cep="cancel"]');
  confirm.addEventListener('click', confirmDelivery);
  cancel.addEventListener('click', openCepModal);
};

const addCepInfoIntoDom = ({ cep, logradouro, bairro, localidade, uf }) => {
  cartModal.innerHTML += `
    <div class="cep-match">
      <ul>
        <li><strong>CEP:</strong> ${cep}</li>
        <li><strong>Logradouro:</strong> ${logradouro}</li>
        <li><strong>Bairro:</strong> ${bairro}</li>
        <li><strong>Localidade:</strong> ${localidade}, ${uf}</li>
      </ul>

      <div class="buttons-cep">
        <button class="sell-button" data-cep="confirm">Confirmar endereço de entrega</button>
        <button class="button-intro" data-cep="cancel">Cancelar</button>
      </div>
    </div>
  `;
  addEventButtonCep();
};

const noFindCep = (condition) => {
  const message = document.querySelector('.not-find-cep');
  if (message) {
    if (condition) message.classList.remove('desactive');
    if (!condition) message.classList.add('desactive');
  }
};

const getCepInfo = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const json = await response.json();
    addCepInfoIntoDom(json);
  } catch (err) {
    noFindCep(true);
  } finally {
    noFindCep(false);
  }
};

const checkCep = () => {
  const cepInput = document.querySelector('.search input');
  const cep = cepInput.value;
  const regexCep = /\d{5}[-\s]?\d{3}/g;
  if (cep.match(regexCep)) {
    noFindCep(false);
    getCepInfo(cep);
    return;
  }
  noFindCep(true);
};

const addCepEvent = (search) => {
  search.addEventListener('click', checkCep);
};

const openCepModal = () => {
  cartModal.innerHTML = `
    <h1 class="title cart-title">Entrega:</h1>
    <div class="cep-container">
      <label for="cep">Informe o CEP:</label>
      <div class="search">
        <input type="text" name="cep" id="cep">
        <button class="search-cep"></button>
      </div>
    </div>
    <p class="not-find-cep desactive">Nenhum cep foi encontrado</p>
  `;
  const search = cartModal.querySelector('.search-cep');
  addCepEvent(search);
};

const purchaseInProgress = () => {
  const addToCartButtons = document.querySelectorAll('[data-cart="add"]');
  addToCartButtons.forEach((button) => {
    button.classList.add('disabled');
    button.disabled = true;
    button.innerText = 'Compra em andamento';
  });
};

const addCepApiEvent = () => {
  openCepModalButton.addEventListener('click', openCepModal);
  openCepModalButton.addEventListener('click', purchaseInProgress);
};

export { addCepApiEvent };
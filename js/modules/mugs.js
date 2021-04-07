const mugControl = document.querySelector('.mug-control');
const mugContent = document.querySelector('.mug-content');

const fetchMugs = async () => {
  const response = await fetch('../api/mugs.json');
  return await response.json();
};

const addMugsIntoDom = async () => {
  const mugs = await fetchMugs();
  addthumbMugs(mugs);
  mugsTemplate(mugs);
};

const addthumbMugs = (mugs) => {
  mugs.forEach((mug) => {
    mugControl.innerHTML += `<li><img src="${mug.thumb}"></li>`;
  });
};

const mugsTemplate = (mugs) => {
  mugs.forEach(({ name, description, img, price, stock }) => {
    mugContent.innerHTML += `
      <article class="mug-container">
        <h2 class="subtitle">${name}</h2>
        <p class="paragraph">${description}</p>

        <figure class="mug-image">
          <img src="${img}" alt="Foto de uma caneca preta de porcelana">
        </figure>

        <div class="buy">
          <p>Por:</p>
          <span class="price"><sup class="cipher">R$</sup>${price}</span>
          <button class="sell-button">Adicionar ao carrinho</button>
          <span class="remaining">${stock} restantes</span>
        </div>
      </article>
    `;
  });
};

export { addMugsIntoDom };

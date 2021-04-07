const mugControl = document.querySelector('.mug-control');
const mugContent = document.querySelector('.mug-content');

const fetchMugs = async () => {
  const response = await fetch('./api/mugs.json');
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
  const mugsTemplate = mugs.map(({ name, description, img, price, stock }) => `
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
  `).join('');

  mugContent.innerHTML += mugsTemplate;
  initTabNav();
};

const initTabNav = () => {
  const tabControls = mugControl.querySelectorAll('li');
  const tabContent = mugContent.querySelectorAll('article');
  const activeClass = 'active';

  const removeActiveClass = () => {
    tabControls.forEach((control) => control.classList.remove(activeClass));
    tabContent.forEach((content) => content.classList.remove(activeClass));
  };

  const addActiveClass = (index) => {
    removeActiveClass();
    tabControls[index].classList.add(activeClass);
    tabContent[index].classList.add(activeClass);
  };

  const addTabNavEvents = (controls) => {
    controls.forEach((control, index) => {
      control.addEventListener('click', () => {
        addActiveClass(index);
      });
    });
  };
    
  if (tabControls.length && tabContent.length) {
    addActiveClass(2);
    addTabNavEvents(tabControls);
  } 
}

export { addMugsIntoDom };

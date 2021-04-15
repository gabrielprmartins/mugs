const itemToShowTooltip = document.querySelector('.budget-button');
const activeClass = 'active';

const createTooltip = (container) => {
  const div = document.createElement('div');
  const message = 'Apenas demonstrativo';
  div.innerText = message;
  div.classList.add('tooltip');
  container.style.position = 'relative';
  container.appendChild(div);
  return div;
};

const enableTooltip = (event) => {
  const tooltip = createTooltip(event.target.parentElement);
  tooltip.classList.add(activeClass);
};

const disableTooltip = (event) => {
  event.target.nextElementSibling.classList.remove(activeClass);
  event.target.parentElement.removeChild(event.target.nextElementSibling)
};

const preventEvents = (event) => {
  event.preventDefault();
};

const addTooltipEvents = () => {
  itemToShowTooltip.addEventListener('click', preventEvents);
  itemToShowTooltip.addEventListener('mouseover', enableTooltip);
  itemToShowTooltip.addEventListener('mouseout', disableTooltip);
};

export { addTooltipEvents };

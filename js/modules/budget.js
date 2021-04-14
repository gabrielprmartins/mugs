const budgetForm = document.querySelector('.budget-form');
let totalCust = 0;

const formItems = {
  selectModel: budgetForm.querySelector('select[name="model"]'),
  selectDeadline: budgetForm.querySelector('select[name="deadline"]'),
  custContainer: budgetForm.querySelector('.budget-prices'),
  cust: +budgetForm.querySelector('.budget-prices').innerText.replace('R$', '')
    .replace(',', '.'),
};

const changeCust = (cust) => {
  formItems.custContainer.innerHTML = `<sup class="cipher budget-cipher">
    R$</sup>${cust.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>`;
};

const getTotalCust = (cust) => {
  totalCust += cust;
  changeCust(totalCust);
};

const changeCustModel = (event) => {
  const value = event.target.value;
  const price = {
    classic: 32.99,
    modern: 25.30,
    rustic: 10.50,
  };
  getTotalCust(price[value]);
};

const changeCustDeadline = (event) => {
  const value = event.target.value;
  const price = {
    twoWeek: 2.99,
    oneWeek: 5.50,
    threeDays: 15.80,
  };
  getTotalCust(price[value]);
};

const addBudgetEvents = () => {
  const { selectModel, selectDeadline } = formItems;
  selectModel.addEventListener('change', changeCustModel);
  selectDeadline.addEventListener('change', changeCustDeadline);
};

export { addBudgetEvents }; 

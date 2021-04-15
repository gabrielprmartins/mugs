const budgetForm = document.querySelector('.budget-form');
let value1 = 0, value2 = 0;

const formItems = {
  selectModel: budgetForm.querySelector('select[name="model"]'),
  selectDeadline: budgetForm.querySelector('select[name="deadline"]'),
  custContainer: budgetForm.querySelector('.budget-prices'),
  cust: +budgetForm.querySelector('.budget-prices').innerText.replace('R$', '')
    .replace(',', '.'),
  buttonBudget: budgetForm.querySelector('.budget-button'),
};

const changeCust = (cust) => {
  formItems.custContainer.innerHTML = `<sup class="cipher budget-cipher">
    R$</sup>${cust.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>`;
};

const getTotalCust = (cust1, cust2) => {
  const totalCust = cust1  + cust2;
  changeCust(totalCust);
};

const changeCustModel = (event) => {
  const value = event.target.value;
  const price = {
    classic: 32.99,
    modern: 25.30,
    rustic: 10.50,
  };
  value1 = price[value];
  getTotalCust(value1, value2);
};

const changeCustDeadline = (event) => {
  const value = event.target.value;
  const price = {
    twoWeek: 2.99,
    oneWeek: 5.50,
    threeDays: 15.80,
  };
  value2 = price[value];
  getTotalCust(value1, value2);
};

const addBudgetEvents = () => {
  const { selectModel, selectDeadline, buttonBudget } = formItems;
  selectModel.addEventListener('change', changeCustModel);
  selectDeadline.addEventListener('change', changeCustDeadline);
};

export { addBudgetEvents }; 

const btnPluse = document.querySelector('[data-pools="btnPluse"]');
const btnMinus = document.querySelector('[data-pools="btnMinus"]');
const counterText = document.querySelector('[data-number="counterValue"]');
const COUNTER_INITAL_VALUE = 0;

let counter = COUNTER_INITAL_VALUE;

btnPluse.addEventListener("click", () => {
  counter += 1;
  counterText.innerHTML = counter;
});

btnMinus.addEventListener("click", () => {
  counter = COUNTER_INITAL_VALUE;
  counterText.innerHTML = counter;
});
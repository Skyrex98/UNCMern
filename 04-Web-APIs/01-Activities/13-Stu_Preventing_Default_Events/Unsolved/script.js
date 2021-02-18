var tipEl = document.querySelector('#tip-percentage');
var totalEl = document.querySelector('#total');
var submitEl = document.querySelector('#submit');
var tipAmount = document.querySelector('#tip-amount');
var totalAmount = document.querySelector('#new-total');

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);

  return roundedResult;
}

function calculateTotal(tipAmount, total) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  console.log('ADD TIP');
  event.preventDefault();
  var tipPercentage = tipEl.value * 0.01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  console.log('newTotal:', newTotal);
  console.log('tipAmount:', tipAmount);
  tipAmount.textContent = tipAmount;
  totalAmount.textContent = newTotal.toFixed(2);
  //   document.querySelector('#tip-amount').textContent = tipAmount;
  //   document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

submitEl.addEventListener('click', addTip);

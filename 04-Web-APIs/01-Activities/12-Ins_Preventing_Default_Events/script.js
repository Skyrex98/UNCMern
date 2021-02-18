var submitEl = document.querySelector('#submit');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var submissionResponseEl = document.querySelector('#response');

submitEl.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
  var usersName = nameInput.value;
  var test = 'test';
  console.log('WHAT IS THEIR NAME? ', usersName);

  var response =
    'Thank you for your submission ' +
    usersName +
    '! We will reach out to you at ' +
    emailInput.value +
    '.';
  submissionResponseEl.textContent = response;
});

var outer = document.querySelector('.outer-div');
var inner = document.querySelector('.inner-div');
var button = document.querySelector('.button');

function changeBlue(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: blue');
}

function changePurple(event) {
  console.log('IS THIS INNER RUNNING');
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: purple');
}

function changeOrange(event) {
  console.log('IS THIS OUTER RUNNING');
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: orange');
}

outer.addEventListener('click', changeOrange);
inner.addEventListener('click', changePurple);
button.addEventListener('click', changeBlue);

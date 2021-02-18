var imageContainer = document.querySelector('.img-container');
console.log('imageContainer:', imageContainer);

imageContainer.addEventListener('click', function (event) {
  console.log('event:', event.target);
  var element = event.target;

  if (element.matches('img')) {
    var state = element.getAttribute('data-state');
    console.log('the state is:', state);

    if (state === 'still') {
      element.setAttribute('data-state', 'animate');
      element.setAttribute('src', element.getAttribute('data-animate'));
    } else if (state === 'animate') {
      element.setAttribute('data-state', 'still');
      element.setAttribute('src', element.getAttribute('data-still'));
    }
  }
});

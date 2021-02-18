var carousel = document.querySelector('.carouselbox');
var next = carousel.querySelector('.next');
var prev = carousel.querySelector('.prev');

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

var images = [
  'https://picsum.photos/300/200', // 0
  'https://picsum.photos/300/201', // 1
  'https://picsum.photos/300/202', // 2
  'https://picsum.photos/300/203', // 3
]; // length 4

var index = 0;
var currentImage = images[index];

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    // did we go negative and make the index -1
    index = images.length - 1;
  } else if (index > images.length - 1) {
    // did we go over
    index = 0;
  }

  currentImage = images[index];
  console.log('currentImage:', currentImage);

  carousel.style.backgroundImage = `url('${currentImage}')`;
}

carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

next.addEventListener('click', function (event) {
  event.stopPropagation();
  navigate(1);
});

prev.addEventListener('click', function (event) {
  event.stopPropagation();
  navigate(-1);
});

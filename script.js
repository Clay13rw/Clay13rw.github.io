const slider = document.querySelector('.slider');
const thumbnails = document.querySelector('.thumbnails');
const slides = slider.querySelectorAll('img');
const thumbnailsList = thumbnails.querySelectorAll('img');
let currentSlide = 0;

thumbnailsList.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentSlide = index;
    setActiveThumbnail();
    setSlidePosition();
  });
});

function setActiveThumbnail() {
  thumbnailsList.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });
  thumbnailsList[currentSlide].classList.add('active');
}

function setSlidePosition() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setActiveThumbnail();
setSlidePosition();


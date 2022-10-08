const containerImage = document.querySelectorAll('.container img');
const popupImage = document.querySelector('.popup-image');
const popupImageImg = document.querySelector('.popup-image img');
const popupImageSpan = document.querySelector('.popup-image span');

containerImage.forEach((image) => {
  image.addEventListener('click', () => {
    popupImage.style.display = 'block';
    popupImageImg.src = image.getAttribute('src');
  });
});

popupImageSpan.addEventListener('click', () => {
  popupImage.style.display = 'none';
});

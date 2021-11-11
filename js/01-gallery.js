import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
//обращение к div.gallery
const galleryContainer =document.querySelector('.gallery')

const galleryItemMarkup = creategalleryItemMarkup(galleryItems)
//повесели слушателя событий на div.galler
galleryContainer.addEventListener('click', onClickImg)
//делегирования на div.gallery и получение url большого изображения
function onClickImg(event) {
 event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

   const openImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

  openImg.show()
  window.addEventListener('keydown', onEscKeyPress);
// выход по кнопке esc
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
 window.removeEventListener('keydown', onEscKeyPress);
  if (isEscKey) {
    openImg.close();
    
  }
}
}


galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);
//создание макета разметки галереи
function creategalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return` <div class = "gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     
    />
  </a>
</div>`;
            
        }).join('')
  
}

console.log(galleryItemMarkup);



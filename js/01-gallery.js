import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
//обращение к div.gallery
const galleryContainer =document.querySelector('.gallery')

const galleryItemMarkup = creategalleryItemMarkup(galleryItems)
//повесели слушателя событий на div.galler
galleryContainer.addEventListener('click', onClickImg)

  const modalEl = document.querySelector('.basiclightbox')
console.log(modalEl);


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
 const modalEl = document.querySelector("div.basicLightbox");
  // вешаем слушателя кликов для отключения слушателя  кнопок при закрытии по клику
  modalEl.addEventListener("click", onClickModal);
// выход по кнопке esc
  function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
console.log(event)
  if (isEscKey) {
    openImg.close();
  window.addEventListener('keydown', onEscKeyPress);  
  }
}
function onClickModal() {
  window.removeEventListener("click", onClickModal);
  window.removeEventListener("keydown", onEscKeyPress);
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



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer =document.querySelector('.gallery')
const galleryItemMarkup = creategalleryItemMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);
//создание макета разметки галереи
function creategalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return ` <li class = "gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    
      alt="${description}"
    />
  </a>
</li>`;
            
    }).join('');
 
}
//добавление свойств
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
 


//   const modalEl = document.querySelector('.basiclightbox')

// modalEl.addEventListener('click', onModalElClick);

// function onModalElClick(event) {
//   if (event.currentTarget === event.target) {
//     modalEl.removeEventListener('click', onModalElClick);
//      window.removeEventListener('keydown', onEscKeyPress);
//   }
// }
  
   // function closeimg() {
  //   window.removeEventListener('keydown', onEscKeyPress);
  // }
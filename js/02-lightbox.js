import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer =document.querySelector('.gallery')
const galleryItemMarkup = creategalleryItemMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);

function creategalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return ` <div class = "gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    
      alt="${description}"
    />
  </a>
</div>`;
            
    }).join('');
 
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
 

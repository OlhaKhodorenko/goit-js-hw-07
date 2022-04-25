import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMmarkup = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMmarkup);
galleryContainer.addEventListener("click", onPrewiewImgClick);

function  createGallaryMarkup (galleryItems){
return galleryItems.map(({
    preview, original, description}) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join("");
}
function onPrewiewImgClick(evt){
      const lightbox = new SimpleLightbox('.gallery a',
       {docClose: false,
        captionsData: "alt",
        captionDelay: 250,
    });
    evt.preventDefault();
  }
  
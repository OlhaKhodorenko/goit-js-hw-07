import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(createGallaryMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");
const galleryMmarkup = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMmarkup);
galleryContainer.addEventListener("click", onPrewiewImgClick);

function  createGallaryMarkup (galleryItems){
return galleryItems.map(({
    preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}).join("");
}


function onPrewiewImgClick(evt){
  evt.preventDefault();
   const isImgEl = evt.target.classList.contains('gallery__image');
   if(!isImgEl){
    return;}
  const originalUrlSource = evt.target.dataset.source;
    createModal(originalUrlSource);
}

function createModal(source) {
    const instance = basicLightbox.create(`
      <img src="${source}"/>`,
    {
      onShow: (instance) => {
      document.addEventListener("keydown", onEscClose);
      function onEscClose(e) {
        if (e.code == "Escape") {
        instance.close();
        document.removeEventListener("keydown", onEscClose);
        }
      }
    }
  })
instance.show()
}
//console.log(galleryItems);

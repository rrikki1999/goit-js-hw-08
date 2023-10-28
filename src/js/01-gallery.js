
import { galleryItems } from './gallery-items';


console.log(galleryItems);
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const listImages = document.querySelector(".gallery");
console.log(listImages);

const imageMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML("beforeend", imageMarkup);



function createImagesListMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      />
   </a>
</li>`;
  }).join("");
};

const lightbox = new SimpleLightbox('.gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
      });

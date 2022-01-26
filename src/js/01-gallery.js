// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');


function createGallaryCards(images) {
    return images.map(({preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>        
        `;
    })
        .join(' '); 
}

const cards = createGallaryCards(galleryItems);
gallery.insertAdjacentHTML('beforeend',cards);


const lightbox = new SimpleLightbox('.gallery a', {    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

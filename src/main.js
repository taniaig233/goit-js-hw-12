// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { createMarkup, showLoadMoreButton, hideLoadMoreButton, showEndOfCollectionMessage } from "./js/render-fanctions"
import { getPictures } from "./js/pixabay-api"

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
let inputValue = ``;
let simpleLightboxExem;

const LOADER_DISPLAY_BLOCK = 'block';
const LOADER_DISPLAY_NONE = 'none';
const PER_PAGE = 15;
let currentPage = 1;

function setLoaderDisplay(displayValue) {
    loader.style.display = displayValue;
}


formSearch.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

scrollingTopPage();


function onSearch(event) {
    event.preventDefault();

    currentPage = 1;
    listImages.innerHTML = '';
    setLoaderDisplay(LOADER_DISPLAY_BLOCK);
    

    inputValue = event.target.elements.search.value.trim();

    if (!inputValue) {
        iziToast.warning({
            title: 'Caution',
            message: 'Sorry, but you did not fill out the field!',
        });
        setLoaderDisplay(LOADER_DISPLAY_NONE);
        hideLoadMoreButton()
        return;
    }

    getPictures(inputValue, currentPage)
        .then(({ data }) => {
           setLoaderDisplay(LOADER_DISPLAY_NONE);

            const totalPages = Math.ceil(data.totalHits / PER_PAGE);

            if (currentPage === totalPages) {
                hideLoadMoreButton();
                showEndOfCollectionMessage();
            } else {
                showLoadMoreButton();
            }

            if (!data.hits.length) {
                    iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    });
                hideLoadMoreButton();
                return;
            }

            listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));

            iziToast.success({
                title: 'Wow',
                message: `We found ${data.totalHits} pictures!`,
            });

            simpleLightboxExem = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            }).refresh();

            formSearch.reset();
        })
        .catch((err) => {
             setLoaderDisplay(LOADER_DISPLAY_NONE);
            console.log(err);
        });
}

function onLoadMore() {
    currentPage += 1;

    showLoadMoreButton();
    
    setLoaderDisplay(LOADER_DISPLAY_NONE);
  
  
    getPictures(inputValue, currentPage)
        .then(({ data }) => {
            listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));

            simpleLightboxExem.refresh();

            const totalPages = Math.ceil(data.totalHits / PER_PAGE);

            if (currentPage === totalPages) {
                setLoaderDisplay(LOADER_DISPLAY_NONE);
                hideLoadMoreButton();
                showEndOfCollectionMessage();

                return;
            }

            hideLoadMoreButton;
            setLoaderDisplay(LOADER_DISPLAY_BLOCK);
        })
        .catch(error => console.log(error));
}


function scrollingTopPage() {
    const pictHeight = listImages.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({
        top: 2 * pictHeight,
        left: 0,
        behavior: 'smooth',
    });
}
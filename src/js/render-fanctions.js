const loadMoreBtn = document.querySelector('.load-more-btn');

export function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `     <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join('');
}


export function hideLoadMoreButton() {
    loadMoreBtn.style.display = 'none';
}

export function showLoadMoreButton() {
    loadMoreBtn.style.display = 'block';
}

export function showEndOfCollectionMessage() {
    iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results."
    });
}
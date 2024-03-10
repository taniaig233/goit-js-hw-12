
import axios from 'axios';

const perPage = 15;


export async function getPictures(name, page) {
    const KEY = '42680583-e819b638960e20d04367e2a0d';

    try {
        if (name.includes(' ')) {
            name.replace(/\s+/g, '+');
        }

        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: KEY,
                q: name,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            }
        })
        return response;
    }
    catch {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });
        console.error(error.message);
    }
}


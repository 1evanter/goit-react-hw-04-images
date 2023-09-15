import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38212223-f32e704a5bd5b7c02deacefa3';

export const fetchImages = async (query, page, per_page) => {
   const response = await axios.get(
        `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    return response.data;
}
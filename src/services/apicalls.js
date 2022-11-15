
import axios from 'axios';

var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';

var apiRoot = 'https://api.themoviedb.org/3';

export const searchFilms = async (query) => {

    return axios.get(`${apiRoot}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
};
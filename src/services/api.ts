import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=2c5fc2d3aec63eb3ccae326eb2c6d8b7&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;

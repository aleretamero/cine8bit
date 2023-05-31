import axios from 'axios';

// 2c5fc2d3aec63eb3ccae326eb2c6d8b7

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzVmYzJkM2FlYzYzZWIzY2NhZTMyNmViMmM2ZDhiNyIsInN1YiI6IjY0Nzc4YWU5OTM4MjhlMDExNjIyYTE3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vGlaf2FosfC_6UWlkzGwbqCg8jIMoGLe4X-FgAXnDWY

// https://api.themoviedb.org/3/movie/now_playing?api_key=2c5fc2d3aec63eb3ccae326eb2c6d8b7&language=pt-BR

// Base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=2c5fc2d3aec63eb3ccae326eb2c6d8b7&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;

// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=2c5fc2d3aec63eb3ccae326eb2c6d8b7&language=pt-BR

// Hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// API
import api from '../../services/api';

// Styles
import styles from './styles.module.scss';

const loadMovies = async () => {
  const response = await api.get('movie/now_playing', {
    params: {
      api_key: '2c5fc2d3aec63eb3ccae326eb2c6d8b7',
      language: 'pt-BR',
    },
  });
  // console.log(response.data.results);

  return response.data.results;
};

const Home = () => {
  const [movies, setMovies] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies().then(result => {
      setMovies(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      {loading && <p className={styles.loading}>Carregando filmes...</p>}
      <div className={styles.listMovies}>
        {!loading &&
          movies &&
          movies.map(movie => (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Home;

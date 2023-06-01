// Hooks
import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';

import api from '../../services/api';

const loadMovie = async (
  id: string,
  navigate: NavigateFunction
): Promise<iMovie | null> => {
  const movie = await api
    .get(`/movie/${id}`, {
      params: {
        api_key: '2c5fc2d3aec63eb3ccae326eb2c6d8b7',
        language: 'pt-BR',
      },
    })
    .then(response => {
      const movie: iMovie = response.data;
      // console.log('then aqui', movie);
      return movie;
    })
    .catch(() => {
      navigate('/', { replace: true });
      return null;
    });

  return movie;
};

// Styles
import styles from './styles.module.scss';
import iMovie from '../../types/movie';

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<iMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie(id as string, navigate).then(response => {
      setMovie(response);
      // console.log('useEffect aqui', response);
      setLoading(false);
    });

    return () => {
      // console.log('Componente Desmontado');
    };
  }, [id, navigate]);

  const handleClick = () => {
    const myList = localStorage.getItem('@cine8bit');
    const moviesSaves: iMovie[] = myList ? JSON.parse(myList) : [];

    if (movie) {
      const hasMovie = moviesSaves.some(movieSave => movieSave.id === movie.id);

      if (hasMovie) {
        alert('Este filme já está na lista');
      } else {
        moviesSaves.push(movie);
        localStorage.setItem('@cine8bit', JSON.stringify(moviesSaves));
        alert('Filme Salvo com sucesso');
      }
    }
  };

  return (
    <div className={styles.container}>
      {loading && <p className={styles.loading}>Carregando detalhes...</p>}
      {!loading && movie && (
        <div className={styles.movieInfo}>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
          <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

          <div className={styles.areaButtons}>
            <button onClick={handleClick}>Salvar</button>
            <button>
              <a
                target="_blank"
                rel="external"
                devicon-nodejs-plaindevicon-nodejs-plain
                href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
              >
                Trailer
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;

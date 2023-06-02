import * as Styled from './styles';

// Hooks
import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import iMovie from '../../types/movie';

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
      return movie;
    })
    .catch(() => {
      navigate('/', { replace: true });
      return null;
    });

  return movie;
};

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<iMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie(id as string, navigate).then(response => {
      setMovie(response);
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
        toast.warn('Esse filme já está na sua lista!');
      } else {
        moviesSaves.push(movie);
        localStorage.setItem('@cine8bit', JSON.stringify(moviesSaves));
        toast.success('Filme salvo com sucesso!');
      }
    }
  };

  return (
    <Styled.Container>
      {loading && <Styled.Loading>Carregando detalhes...</Styled.Loading>}
      {!loading && movie && movie.vote_average && (
        <Styled.MovieInfo>
          <h1>{movie.title}</h1>
          <Styled.MovieImg
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
          <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

          <Styled.ContainerButtons>
            <Styled.Button onClick={handleClick}>Salvar</Styled.Button>
            <Styled.Button>
              <a
                target="_blank"
                rel="external"
                devicon-nodejs-plaindevicon-nodejs-plain
                href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
              >
                Trailer
              </a>
            </Styled.Button>
          </Styled.ContainerButtons>
        </Styled.MovieInfo>
      )}
    </Styled.Container>
  );
};

export default Movie;

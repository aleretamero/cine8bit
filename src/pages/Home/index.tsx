import { useState, useEffect } from 'react';

import api from '../../services/api';

import iMovie from '../../types/movie';

import * as Styled from './styles';
import CardMovie from '../../components/CardMovie';

const loadMovies = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const response = await api.get('movie/now_playing', {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
    },
  });

  return response.data.results;
};

const Home = () => {
  const [movies, setMovies] = useState<iMovie[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies().then((result) => {
      setMovies(result);
      setLoading(false);
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>Filmes em cartaz</Styled.Title>
      {loading && <Styled.Loading>Carregando filmes...</Styled.Loading>}
      {!loading && movies && (
        <Styled.ListMovies>
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </Styled.ListMovies>
      )}
    </Styled.Container>
  );
};

export default Home;

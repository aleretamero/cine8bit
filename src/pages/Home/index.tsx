import { useState, useEffect } from 'react';

import api from '../../services/api';

import iMovie from '../../types/movie';

import * as Styled from './styles';
import CardMovie from '../../components/CardMovie';

const loadMovies = async () => {
  const response = await api.get('movie/now_playing', {
    params: {
      api_key: '2c5fc2d3aec63eb3ccae326eb2c6d8b7',
      language: 'pt-BR',
    },
  });

  return response.data.results;
};

const Home = () => {
  const [movies, setMovies] = useState<iMovie[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies().then(result => {
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
          {movies.map(movie => (
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.backdrop_path}
            />
          ))}
        </Styled.ListMovies>
      )}
    </Styled.Container>
  );
};

export default Home;

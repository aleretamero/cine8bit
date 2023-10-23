import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import iMovie from '../../types/movie';

const Favorites = () => {
  const [movies, setMovies] = useState<iMovie[]>([]);

  useEffect(() => {
    const moviesStorage = localStorage.getItem('@cine8bit');
    const moviesList: iMovie[] = moviesStorage ? JSON.parse(moviesStorage) : [];

    setMovies(moviesList);
  }, []);

  const handleClick = (id: number) => {
    const moviesFiltered = movies.filter((movie) => movie.id !== id);

    setMovies(moviesFiltered);
    localStorage.setItem('@cine8bit', JSON.stringify(moviesFiltered));
    if (moviesFiltered.length === 0) {
      localStorage.removeItem('@cine8bit');
    }

    toast.success('Filme removido com sucesso!');
  };

  return (
    <Styled.Container>
      <Styled.Title>Favoritos</Styled.Title>
      {movies.length === 0 && (
        <Styled.NoMovies>Você não possui filmes salvos :&#40;</Styled.NoMovies>
      )}
      {movies.length > 0 && (
        <Styled.ContainerMovies>
          {movies.map((movie) => (
            <Styled.Movie key={movie.id}>
              <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
              <Styled.ContainerButtons>
                <Button colorPrimary="#05062d" colorSecundary="#5b42f3">
                  <Link to={`/filme/${movie.id}`}>Detalhes</Link>
                </Button>
                <Button
                  onClick={() => handleClick(movie.id)}
                  colorPrimary="#8C031C"
                  colorSecundary="#F20F38"
                >
                  Excluir
                </Button>
              </Styled.ContainerButtons>
            </Styled.Movie>
          ))}
        </Styled.ContainerMovies>
      )}
    </Styled.Container>
  );
};

export default Favorites;

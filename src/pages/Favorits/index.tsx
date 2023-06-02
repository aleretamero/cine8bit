import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import iMovie from '../../types/movie';

const Favorits = () => {
  const [movies, setMovies] = useState<iMovie[] | null>(null);

  useEffect(() => {
    const moviesStorage = localStorage.getItem('@cine8bit');
    const moviesList: iMovie[] = moviesStorage
      ? JSON.parse(moviesStorage)
      : null;

    setMovies(moviesList);
  }, []);

  const handleClick = (id: number) => {
    if (movies) {
      const moviesFiltered = movies.filter(movie => movie.id !== id);

      setMovies(moviesFiltered);
      localStorage.setItem('@cine8bit', JSON.stringify(moviesFiltered));
      if (moviesFiltered.length === 0) {
        localStorage.removeItem('@cine8bit');
      }

      toast.success('Filme removido com sucesso!');
    }
  };

  return (
    <Styled.Container>
      <h1>Favoritos</h1>
      {!movies && (
        <div>
          <p>Você não possui filmes salvos :&#40;</p>
        </div>
      )}
      {movies && (
        <ul>
          {movies.map(movie => (
            <Styled.Movie key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/filme/${movie.id}`}>Ver Detalhes</Link>
                <button onClick={() => handleClick(movie.id)}>Excluir</button>
              </div>
            </Styled.Movie>
          ))}
        </ul>
      )}
    </Styled.Container>
  );
};

export default Favorits;

import * as Styled from './styles';

import iMovie from '../../types/movie';

const CardMovie = ({ id, title, poster_path }: iMovie) => {
  return (
    <Styled.CardMovie>
      <Styled.LinkMovie to={`/filme/${id}`}>
        <Styled.ImgMovie
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
      </Styled.LinkMovie>
    </Styled.CardMovie>
  );
};

export default CardMovie;

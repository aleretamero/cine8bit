import * as Styled from './styles';

const NotFound = () => {
  return (
    <Styled.Container>
      <Styled.Title>404</Styled.Title>
      <h2>Pagina não encontrada!</h2>
      <Styled.LinkMovie to="/">Veja todos os filmes!</Styled.LinkMovie>
    </Styled.Container>
  );
};

export default NotFound;

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  /* min-height: calc(100vh - 80px); */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMovie = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'img info'
    'buttons buttons';

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'img'
      'info'
      'buttons';
  }

  @media (max-width: 425px) {
   padding: 1rem;
  }
`;

export const MovieImg = styled.img`
  grid-area: img;
  max-width: 100%;
  border-radius: 10px;
  padding: 2px;
  background-color: black;
  /* background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb); */
  /* box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px; */
  /* width: 500px; */
  /* max-height: 340px; */
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  grid-area: info;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  padding: 0 8px;
`;

export const Loading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

export const ContainerButtons = styled.div`
  grid-area: buttons;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

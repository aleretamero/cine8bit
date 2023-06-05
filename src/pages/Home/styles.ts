import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 475px) {
    font-size: 2rem;
  }
`;

export const ListMovies = styled.ul`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`;

export const Loading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

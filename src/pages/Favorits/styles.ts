import styled from 'styled-components';

export const Container = styled.section`
  /* max-width: 1200px; */
  width: 100%;
  /* margin-top: 2rem; */
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

export const Title = styled.h3`
  font-size: 3rem;

  @media (max-width: 475px) {
    font-size: 2rem;
  }
`;

export const NoMovies = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const ContainerMovies = styled.ul`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: ; */
  gap: 1rem;
  background-color: black;
`;

export const Movie = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

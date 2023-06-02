import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
`;

export const LinkMovie = styled(Link)`
  background-color: #116feb;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
`;

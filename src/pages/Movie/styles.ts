import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  padding: 0 8px;
`;

export const MovieImg = styled.img`
  border-radius: 8px;
  width: 800px;
  max-width: 100%;
  max-height: 340px;
  object-fit: cover;
`;

export const Loading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #116feb;
  color: #fff;
  border-radius: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0e5dc5;
  }
`;

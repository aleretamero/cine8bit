import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardMovie = styled.li`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  transition: all.2s;

  &:hover {
    scale: 1.05;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const LinkMovie = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const ImgMovie = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

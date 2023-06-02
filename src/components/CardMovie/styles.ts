import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardMovie = styled.li`
  width: 100%;
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const LinkMovie = styled(Link)`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;


export const TitleMovie = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  display: block;
`;

export const ImgMovie = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;



import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  /* height: 80px; */
  padding: 1rem max(calc((100% - 1200px) / 2), 2rem);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #000;

  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* font-size: 1.5rem; */
  /* gap: 1rem; */
  color: #fff;
`;

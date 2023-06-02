import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 max(calc((100% - 1200px) / 2), 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
`;

export const Navbar = styled.nav`
  display: flex;
  font-size: 1.5rem;
  gap: 1rem;
  color: #fff;
`;

import * as Styled from './styles';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Header = () => {
  return (
    <Styled.Header>
      <Link to="/">
        <Logo />
      </Link>
      <Styled.Navbar>
        <Link to="/favoritos">Favoritos</Link>
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;

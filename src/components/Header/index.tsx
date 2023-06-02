import * as Styled from './styles';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import Logo from '../Logo';

const Header = () => {
  return (
    <Styled.Header>
      <Link to="/">
        <Logo />
      </Link>
      <Styled.Navbar>
        <Link to="/favoritos">Favoritos</Link>
        <Switch
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={19}
          width={40}
          handleDiameter={20}
          offColor="#00f"
          onColor="#f00"
        />
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;

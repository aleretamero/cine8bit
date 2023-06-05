import * as Styled from './styles';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
// import { LightModeIcon, DarkModeIcon } from '../../assets/themeIcons';

import { useThemeContext } from '../../hooks/useThemeContext';
import { TypeThemeContext } from '../../contexts/GlobalContext';

import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  const { themeStorage, toggleTheme } = useThemeContext() as TypeThemeContext;

  return (
    <Styled.Header>
      <Link to="/">
        <Logo />
      </Link>
      <Styled.Navbar>
        <Link to="/favoritos">
          <Button colorPrimary="#ff512f" colorSecundary="#f09819">
            Favoritos
          </Button>
        </Link>
        {toggleTheme && (
          <Switch
            onColor="#121212"
            offColor="#0FC2C0"
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={toggleTheme}
            checked={themeStorage}
          />
        )}
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;

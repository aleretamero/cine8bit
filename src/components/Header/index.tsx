import * as Styled from './styles';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { LightModeIcon, DarkModeIcon } from '../../assets/themeIcons';

import { useThemeContext } from '../../hooks/useThemeContext';
import { TypeThemeContext } from '../../contexts/GlobalContext';

import Logo from '../Logo';

const Header = () => {
  const { themeStorage, toggleTheme } = useThemeContext() as TypeThemeContext;

  return (
    <Styled.Header>
      <Link to="/">
        <Logo />
      </Link>
      <Styled.Navbar>
        <Link to="/favoritos">Favoritos</Link>
        {toggleTheme && (
          <Switch
            onColor="#00008B"
            offColor="#62ABD9"
            checkedIcon={DarkModeIcon}
            uncheckedIcon={LightModeIcon}
            onChange={toggleTheme}
            checked={themeStorage}
          />
        )}
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;

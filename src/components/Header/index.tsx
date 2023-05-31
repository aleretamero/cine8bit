import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>Cine 8Bit</h1>
      </Link>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Header;

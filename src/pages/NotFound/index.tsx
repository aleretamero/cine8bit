import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const NOtFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todos os filmes!</Link>
    </div>
  );
};

export default NOtFound;

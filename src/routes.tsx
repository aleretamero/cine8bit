import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import Favorits from './pages/Favorits';

// Components
import Header from './components/Header';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Favorits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

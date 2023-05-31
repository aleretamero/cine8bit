import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './assets/components/Header';

// Components

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

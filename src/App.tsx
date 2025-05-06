import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bingo from './pages/Bingo';
import Sponsors from './pages/Sponsors';
import Raffle from './pages/Raffle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="bingo" element={<Bingo />} />
          <Route path="patrocinadores" element={<Sponsors />} />
          <Route path="rifa" element={<Raffle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
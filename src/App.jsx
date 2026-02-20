import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Units from './pages/Units';
import Verbs from './pages/Verbs';
import VerbDetail from './pages/VerbDetail';
import Games from './pages/Games';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/verbs" element={<Verbs />} />
          <Route path="/verbs/:verbName" element={<VerbDetail />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
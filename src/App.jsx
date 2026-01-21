import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 font-sans">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

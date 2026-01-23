import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 font-sans">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

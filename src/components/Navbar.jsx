import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { HiMenu } from "react-icons/hi";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

   // Close mobile menu if screen width >= md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Run once in case page loads on desktop
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <nav className="flex bg-blue-900 text-white p-4 fixed 
                  shadow-md w-full z-10">
      {/* Logo */}
      <Link
          to="/home"
          className="cursor-pointer w-full"
      >
        <div className="flex  items-center gap-2">
          <img 
            src={logo} 
            alt="Logo"
            className='w-[3.5rem] h-auto' 
          />
          <h1 className="font-semibold font-sans text-lg">XvasWeather</h1>
        </div>
      </Link>

       {/* Mobile menu button */}
      <button 
        className={`p-2 cursor-pointer md:hidden  
          transition-transform duration-200 ease-out
          hover:scale-110 focus:bg-black/30 rounded
          ${isOpen ? "rotate-90" : "rotate-0"}`}
        aria-label="Open Menu"
        onClick={toggleMenu}
      >
        <HiMenu size={28} />
      </button>

      {/* Mobile dropdown */}
      <div
        className={`
        absolute top-0 right-0 mt-[5.4rem] bg-blue-300
        dark:bg-blue-700 dark:text-slate-300 
        shadow-lg w-44 md:hidden h-screen  text-black rounded
        transform transition-all duration-200 ease-out overflow-y-auto
        ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
        `}
      >
        <Link
          to="/home"
          className="block px-4 py-2 hover:bg-blue-400 text-center"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 hover:bg-blue-400 text-center"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 hover:bg-blue-400 text-center"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>


      {/* Desktop links */}
      <div className="hidden md:flex md:items-center md:gap-6 ml-auto">
        <Link to="/home" className="hover:underline hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:underline hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:underline hover:text-gray-300">Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar
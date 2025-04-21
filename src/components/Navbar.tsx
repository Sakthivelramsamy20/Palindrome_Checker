
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, History as HistoryIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Book size={20} className="text-palindrome-blue" /> },
    { name: 'History', path: '/history', icon: <HistoryIcon size={20} className="text-palindrome-blue" /> },
    { name: 'About Us', path: '/about', icon: null }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-none border-b border-gray-100 sticky top-0 z-40 transition duration-300">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-[#60B5FF] tracking-tight transition-colors group-hover:text-[#388fc8]">Palindrome</span>
          <span className="text-2xl font-bold text-gray-700 tracking-tight">Checker</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-semibold rounded-lg px-3 py-1.5 transition-all duration-200
                ${location.pathname === link.path ? "bg-[#f3faff] text-[#60B5FF]" : "text-gray-700 hover:bg-[#f5faff] hover:text-[#388fc8]"}
              `}
            >
              <span className="flex items-center space-x-2">
                {link.icon}
                <span>{link.name}</span>
              </span>
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#60B5FF] rounded-t-xl opacity-80"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#60B5FF] hover:text-[#388fc8] focus:outline-none border rounded-full p-2 border-[#e3efff] bg-white/80 transition-colors">
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e3efff] py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium rounded-lg px-4 py-2 transition-colors
                  ${location.pathname === link.path ? "bg-[#f3faff] text-[#60B5FF]" : "text-gray-700 hover:bg-[#f1fbff] hover:text-[#388fc8]"}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-2">
                  {link.icon}
                  <span>{link.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

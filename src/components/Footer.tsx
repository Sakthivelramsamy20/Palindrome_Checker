
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#e3efff] py-8 mt-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-xl font-bold text-[#60B5FF] group-hover:text-[#388fc8] transition-colors">Palindrome</span>
              <span className="text-xl font-bold text-gray-700">Checker</span>
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              Check if your word or phrase reads the same backward as forward.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
            <Link to="/" className="text-gray-500 hover:text-[#60B5FF] transition-colors font-semibold">
              Home
            </Link>
            <Link to="/history" className="text-gray-500 hover:text-[#60B5FF] transition-colors font-semibold">
              History
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-[#60B5FF] transition-colors font-semibold">
              About Us
            </Link>
          </div>
        </div>

        <div className="border-t border-[#e3efff] mt-6 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Palindrome Checker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

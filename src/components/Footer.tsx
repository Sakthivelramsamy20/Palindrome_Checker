
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-palindrome-blue">Palindrome</span>
              <span className="text-xl font-bold text-gray-700">Checker</span>
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Check if your word or phrase reads the same backward as forward.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
            <Link to="/" className="text-gray-600 hover:text-palindrome-blue transition-colors">
              Home
            </Link>
            <Link to="/history" className="text-gray-600 hover:text-palindrome-blue transition-colors">
              History
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-palindrome-blue transition-colors">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-600">
          <p>© {currentYear} Palindrome Checker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

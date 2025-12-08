import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-pink-light dark:border-gray-700 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-pink-dark dark:text-pink-medium hover:text-pink-medium dark:hover:text-pink-light transition-colors mb-4 inline-block">
              Arkista
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-poppins">
              Umjetnički portfolio koji prikazuje kreativnost i umjetničku ekspresiju kroz različite medije.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-pink-dark dark:text-pink-medium font-semibold mb-4">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-dark dark:hover:text-pink-medium transition-colors text-sm"
                >
                  Naslovnica
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-dark dark:hover:text-pink-medium transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-dark dark:hover:text-pink-medium transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div>
            <h3 className="text-pink-dark dark:text-pink-medium font-semibold mb-4">Informacije</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-poppins">
              © {new Date().getFullYear()} Arkista. Sva prava pridržana.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-pink-light dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-poppins">
            Kreirano s ljubavlju za umjetnost
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-pink-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-pink-dark hover:text-pink-medium transition-colors mb-4 inline-block">
              Arkista
            </Link>
            <p className="text-gray-600 text-sm">
              Umjetnički portfolio koji prikazuje kreativnost i umjetničku ekspresiju kroz različite medije.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-pink-dark font-semibold mb-4">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-pink-dark transition-colors text-sm"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-pink-dark transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-pink-dark transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div>
            <h3 className="text-pink-dark font-semibold mb-4">Informacije</h3>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Arkista. Sva prava pridržana.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-pink-light text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            Kreirano s ljubavlju za umjetnost
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


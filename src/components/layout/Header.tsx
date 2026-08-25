import { useState } from 'react';
import { Navigation } from './Navigation';

const logoUrl = 'https://i.postimg.cc/DZJx0tVy/LOTA-MOTORSPORTS.png';
const fallbackLogo = 'https://via.placeholder.com/200x75?text=LOTA+MOTORS';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="nav-container">
        <a href="#" className="brand-logo">
          <img src={logoUrl} alt="Lota Motors Logo" className="brand-logo-img" onError={(event) => { event.currentTarget.src = fallbackLogo; }} />
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          <i className="fa-solid fa-bars" />
        </button>
        <Navigation isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

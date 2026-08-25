interface NavigationProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export const Navigation = ({ isOpen, onNavigate }: NavigationProps) => (
  <ul className={`nav-links${isOpen ? ' show' : ''}`}>
    <li><a href="#about" onClick={onNavigate}>About Us</a></li>
    <li><a href="#showroom" onClick={onNavigate}>Showroom</a></li>
    <li><a href="#financing" onClick={onNavigate}>Financing</a></li>
    <li><a href="#branches" onClick={onNavigate}>Locations</a></li>
    <li><a href="#contact" className="nav-contact-btn" onClick={onNavigate}>Contact Sales</a></li>
  </ul>
);

const logoUrl = 'https://i.postimg.cc/DZJx0tVy/LOTA-MOTORSPORTS.png';

export const Footer = () => (
  <footer id="contact">
    <div className="footer-container">
      <div className="footer-col"><h4>Lota Motors</h4><p>Kenya's trusted dealership for high-grade Japanese and European imported vehicles since establishment.</p></div>
      <div className="footer-col"><h4>Quick Links</h4><ul><li><a href="#showroom">Showroom Inventory</a></li><li><a href="#financing">Finance Calculator</a></li><li><a href="#branches">Our Showrooms</a></li></ul></div>
      <div className="footer-col"><h4>Popular Brands</h4><ul><li>Toyota & Lexus</li><li>Mercedes-Benz</li><li>Subaru</li><li>Mazda</li></ul></div>
    </div>
    <div className="footer-logo"><img src={logoUrl} alt="Lota Car Sales Ltd Logo" onError={(event) => { event.currentTarget.src = 'https://via.placeholder.com/200x60?text=LOTA+CAR+SALES+LTD'; }} /></div>
    <div className="footer-bottom"><p>&copy; 2026 Lota Car Sales Ltd. All rights reserved.</p></div>
  </footer>
);

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div>
          <span className="footer-title">Brew &amp; Blossom Cafe</span>
          <p className="footer-copy">&copy; 2026 Brew &amp; Blossom Cafe. All rights reserved.</p>
        </div>
        <div className="footer-links" aria-label="Footer Navigation">
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
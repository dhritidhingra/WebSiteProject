import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header id="site-header">
      <div className="nav-container">
        <Link to="/home" className="logo-wrapper" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/Logo.png"
            alt="Brew & Blossom Artisan Cafe Logo"
            className="custom-logo-img"
          />
          <div className="logo-text">
            <span className="logo-title">Brew &amp; Blossom</span>
            <span className="logo-subtitle">Artisan Cafe &amp; Bakery</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/menu" className={pathname === '/menu' ? 'active' : ''}>
            Menu
          </Link>
          <Link to="/gallery" className={pathname === '/gallery' ? 'active' : ''}>
            Gallery
          </Link>
          <Link to="/location" className={pathname === '/location' ? 'active' : ''}>
            Location
          </Link>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <Link
            to="/catering"
            className={`btn-catering ${pathname === '/catering' ? 'active' : ''}`}
          >
            Book Catering
          </Link>
          <button
            id="mobile-menu-btn"
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-drawer ${menuOpen ? '' : 'hidden'}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>Our Menu</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Photo Gallery</Link>
        <Link to="/location" onClick={() => setMenuOpen(false)}>Location &amp; Maps</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/catering" onClick={() => setMenuOpen(false)}>Book Catering</Link>
      </div>
    </header>
  );
}
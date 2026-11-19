import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* 3-COLUMN HERO BANNER */}
      <section className="hero-split">
        {/* Left Image Panel */}
        <div className="hero-card hero-image-card">
          <img
            src="/images/left-hero.png"
            alt="Bakery Display"
            className="hero-img"
          />
        </div>

        {/* Center Branding Panel */}
        <div className="hero-card hero-brand-card">
          <div className="brand-badge">Artisan Bakery &amp; Cafe</div>
          <h1 className="brand-title">Brew &amp; Blossom</h1>
          <p className="brand-tagline">Handcrafted Pastries &amp; Specialty Coffee</p>
          <div className="hero-cta-group">
            <Link to="/menu" className="btn-hero-brand">
              Explore Our Menu
            </Link>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="hero-card hero-image-card">
          <img
            src="/images/right-hero.png"
            alt="Specialty Drink"
            className="hero-img"
          />
        </div>
      </section>

      {/* HIGHLIGHT CARDS SECTION */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2>Crafted With Care &amp; Passion</h2>
            <p>
              Every cup we pour and pastry we bake is thoughtfully prepared to
              bring warmth to your day.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
              </div>
              <h3>Ethically Sourced</h3>
              <p>
                We partner with sustainable coffee farmers worldwide to bring you
                single-origin beans roasted to perfection.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-bread-slice" aria-hidden="true"></i>
              </div>
              <h3>Freshly Baked Daily</h3>
              <p>
                Our bakers arrive before dawn to prepare flaky croissants,
                artisan sourdough, and decadent desserts from scratch.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-heart" aria-hidden="true"></i>
              </div>
              <h3>Cozy Sanctuary</h3>
              <p>
                Relax surrounded by botanicals, natural sunlight, comfortable
                seating, and friendly local baristas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
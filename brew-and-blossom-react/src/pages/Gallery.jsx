import { useState } from 'react';

const GALLERY_ITEMS = [
  // ATMOSPHERE (6 items)
  { src: '/images/gallery1.png', alt: 'Atmosphere 1', category: 'atmosphere', tag: 'Atmosphere', title: 'Main Dining Area' },
  { src: '/images/gallery2.png', alt: 'Atmosphere 2', category: 'atmosphere', tag: 'Atmosphere', title: 'Sunlit Corner Seating' },
  { src: '/images/gallery3.png', alt: 'Atmosphere 3', category: 'atmosphere', tag: 'Atmosphere', title: 'Botanical Greenery Corner' },
  { src: '/images/gallery4.png', alt: 'Atmosphere 4', category: 'atmosphere', tag: 'Atmosphere', title: 'Cozy Study Lounge' },
  { src: '/images/gallery5.png', alt: 'Atmosphere 5', category: 'atmosphere', tag: 'Atmosphere', title: 'Outdoor Patio Vibe' },
  { src: '/images/gallery6.png', alt: 'Atmosphere 6', category: 'atmosphere', tag: 'Atmosphere', title: 'Evening Ambient Lighting' },

  // COFFEE & DRINKS (6 items)
  { src: '/images/lavender.png', alt: 'Coffee 1', category: 'drinks', tag: 'Coffee & Drinks', title: 'Signature Latte Art' },
  { src: '/images/pour.png', alt: 'Coffee 2', category: 'drinks', tag: 'Coffee & Drinks', title: 'Honey Lavender Pour' },
  { src: '/images/tonic.png', alt: 'Coffee 3', category: 'drinks', tag: 'Coffee & Drinks', title: 'Matcha Green Tea Latte' },
  { src: '/images/matcha.png', alt: 'Coffee 4', category: 'drinks', tag: 'Coffee & Drinks', title: 'Iced Espresso Tonic' },
  { src: '/images/chai.png', alt: 'Coffee 5', category: 'drinks', tag: 'Coffee & Drinks', title: 'Single-Origin Pour Over' },
  { src: '/images/hibiscus.png', alt: 'Coffee 6', category: 'drinks', tag: 'Coffee & Drinks', title: 'Aromatic Masala Chai' },

  // PASTRIES & BAKES (9 items)
  { src: '/images/croissant.png', alt: 'Pastry 1', category: 'pastries', tag: 'Pastries & Bakes', title: 'Fresh Butter Croissants' },
  { src: '/images/coconut.png', alt: 'Pastry 2', category: 'pastries', tag: 'Pastries & Bakes', title: 'Coconut Lilikoi Puff Pastry' },
  { src: '/images/tart.png', alt: 'Pastry 3', category: 'pastries', tag: 'Pastries & Bakes', title: 'Strawberry Fruit Tart' },
  { src: '/images/tiramisu.png', alt: 'Pastry 4', category: 'pastries', tag: 'Pastries & Bakes', title: 'Artisan Tiramisu Slice' },
  { src: '/images/tres.png', alt: 'Pastry 5', category: 'pastries', tag: 'Pastries & Bakes', title: 'Strawberry Tres Leches Cake' },
  { src: '/images/mango.png', alt: 'Pastry 6', category: 'pastries', tag: 'Pastries & Bakes', title: 'Assorted French Macarons' },
  { src: '/images/jalapeno.png', alt: 'Pastry 7', category: 'pastries', tag: 'Pastries & Bakes', title: 'Garlic Jalapeño Sourdough' },
  { src: '/images/bacon.png', alt: 'Pastry 8', category: 'pastries', tag: 'Pastries & Bakes', title: 'Mango Cardamom Pudding' },
  { src: '/images/focaccia.png', alt: 'Pastry 9', category: 'pastries', tag: 'Pastries & Bakes', title: 'Bacon & Gruyère Pinwheel' },

  // GENERAL PHOTOS (7 items)
  { src: '/images/mac.png', alt: 'General 1', category: 'general', tag: 'General', title: 'Cafe Counter & Baristas' },
  { src: '/images/dark.png', alt: 'General 2', category: 'general', tag: 'General', title: 'Morning Sunlight View' },
  { src: '/images/mini.png', alt: 'General 3', category: 'general', tag: 'General', title: 'Community Board & Books' },
  { src: '/images/right-hero.png', alt: 'General 4', category: 'general', tag: 'General', title: 'Entrance & Floral Display' },
  { src: '/images/left-hero.png', alt: 'General 5', category: 'general', tag: 'General', title: 'Barista at Work' },
  { src: '/images/showcase.png', alt: 'General 6', category: 'general', tag: 'General', title: 'Cozy Seating Booths' },
  { src: '/images/showcase2.png', alt: 'General 7', category: 'general', tag: 'General', title: 'Wall Art & Decor' },
];

const FILTER_BUTTONS = [
  { key: 'atmosphere', label: 'Atmosphere (6)' },
  { key: 'all', label: 'All Photos (28)' },
  { key: 'drinks', label: 'Coffee & Drinks (6)' },
  { key: 'pastries', label: 'Pastries & Bakes (9)' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('atmosphere');

  const visibleItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Visual Atmosphere</span>
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-description">
            Take a glimpse inside our botanical sanctuary of sweets, coffee, and
            community.
          </p>
        </div>
      </section>

      {/* GALLERY CONTAINER */}
      <main className="container page-content">
        <div className="gallery-filters" role="group" aria-label="Filter gallery photos">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.key}
              type="button"
              className={`filter-btn ${activeCategory === btn.key ? 'active' : ''}`}
              aria-pressed={activeCategory === btn.key}
              onClick={() => setActiveCategory(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid-pro">
          {visibleItems.map((item) => (
            <div key={`${item.category}-${item.src}-${item.title}`} className="gallery-card">
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-img-pro"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
export default function About() {
  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Our Story &amp; Philosophy</span>
          <h1 className="page-title">About Brew &amp; Blossom</h1>
          <p className="page-description">
            An enduring passion for the culinary arts, boutique baking, and
            specialty coffee.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <main>
        {/* PART 1: THE STORY OF PASSION (Light Cream Section) */}
        <section className="about-section-wrapper light-bg">
          <div className="container">
            <div className="about-section-row">
              <div className="about-text">
                <span
                  className="brand-badge"
                  style={{ marginBottom: '0.5rem', display: 'inline-block' }}
                >
                  Rooted in Passion
                </span>
                <h2 className="section-title-dark">
                  A Lifelong Dream Brewed to Life
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Brew &amp; Blossom Cafe is built on a deep, enduring passion
                  for the culinary arts and the warmth of an independent
                  neighborhood bakery. What began as a dream to create a
                  welcoming local gathering space has grown into a boutique
                  sanctuary dedicated to comfort and quality.
                </p>
                <p>
                  Surrounded by botanicals and natural sunlight, our space is
                  designed for meaningful conversations, creative mornings, and a
                  genuine appreciation for slow-crafted hospitality.
                </p>
              </div>
              <div className="about-image-card">
                <img
                  src="/images/showcase.png"
                  alt="Artisan Bakery Interior & Showcase"
                  className="rounded-img shadow-effect"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: THE DESSERTS & BAKING CRAFT (Dark Espresso Contrast Block) */}
        <section className="about-section-wrapper dark-bg">
          <div className="container">
            <div className="about-section-row reverse-row">
              <div className="about-image-card">
                <img
                  src="/images/showcase2.png"
                  alt="Fresh Desserts and Pastries"
                  className="rounded-img border-gold"
                />
              </div>
              <div className="about-text dark-theme-text">
                <span
                  className="brand-badge"
                  style={{ marginBottom: '0.5rem', display: 'inline-block' }}
                >
                  Scratch-Made Daily
                </span>
                <h2 className="section-title-light">
                  Artisan Pastries &amp; Decadent Desserts
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Our bakers arrive before dawn every single day, working with
                  pure butter, rich chocolate, fresh fruits, and fine
                  ingredients to bake everything entirely from scratch.
                </p>
                <p>
                  From flaky croissants to rich signature tiramisu slices and
                  custom-glazed cakes, every treat is crafted to offer a touch of
                  boutique elegance in every single bite. Taste the difference
                  that true dedication makes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 3: YOUTUBE VIDEO FEATURE SECTION (Bonus Feature) */}
        <section className="about-section-wrapper light-bg video-section-wrapper">
          <div className="container">
            <span
              className="brand-badge"
              style={{ marginBottom: '0.5rem', display: 'inline-block' }}
            >
              Behind the Scenes
            </span>
            <h2 className="section-title-dark">Watch Our Craft in Action</h2>
            <p
              style={{
                maxWidth: '650px',
                margin: '0 auto',
                color: 'var(--text-muted)',
              }}
            >
              Step inside our kitchen and experience how our signature pastries
              and specialty coffee brews come to life every morning.
            </p>

            {/* YOUTUBE VIDEO CONTAINER */}
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/u_EakQkMZQk"
                title="Brew & Blossom Cafe - Behind the Scenes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
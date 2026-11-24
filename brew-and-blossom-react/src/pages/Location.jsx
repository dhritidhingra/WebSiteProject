export default function Location() {
  return (
    <>
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Visit Our Sanctuary</span>
          <h1 className="page-title">Location &amp; Hours</h1>
          <p className="page-description">
            Stop by for your daily roast, warm scratch-baked pastries, and cozy
            conversations.
          </p>
        </div>
      </section>

      <main className="container page-content">
        <div className="location-wrapper">
          <div className="location-info-card">
            <span className="brand-badge badge-inline">Sanctuary Details</span>
            <h2 className="location-title">Visit Brew &amp; Blossom</h2>

            <div className="info-block">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  1234 Blossom Lane, Suite 100
                  <br />
                  Memphis, TN 38111
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Cafe Hours</h3>
                <ul className="hours-list">
                  <li>
                    <span>Monday – Thursday:</span>{' '}
                    <strong>7:00 AM – 6:00 PM</strong>
                  </li>
                  <li>
                    <span>Friday – Saturday:</span>{' '}
                    <strong>7:00 AM – 8:00 PM</strong>
                  </li>
                  <li>
                    <span>Sunday:</span> <strong>8:00 AM – 5:00 PM</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <i
                  className="fa-solid fa-square-parking"
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <h3>Parking &amp; Amenities</h3>
                <p>
                  Free dedicated lot behind the building and street parking
                  available. Complimentary high-speed Wi-Fi and indoor/outdoor
                  seating.
                </p>
              </div>
            </div>

            <div className="location-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Memphis,+TN+38111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-catering"
              >
                <i
                  className="fa-solid fa-location-arrow"
                  aria-hidden="true"
                ></i>{' '}
                Get Directions
              </a>
            </div>
          </div>

          <div className="map-card-container">
            <iframe
              className="google-map-iframe"
              title="Brew & Blossom Cafe Location Map - Memphis, TN"
              src="https://www.google.com/maps?q=Memphis,TN+38111&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
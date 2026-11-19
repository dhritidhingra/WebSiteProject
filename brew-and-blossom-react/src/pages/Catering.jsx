import { useState } from 'react';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event_date: '',
    guest_count: '',
    package: 'espresso-bar',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mpppkpga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          event_date: '',
          guest_count: '',
          package: 'espresso-bar',
          details: '',
        });
      } else {
        setErrorMsg('There was a problem submitting your inquiry. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Elevate Your Gatherings</span>
          <h1 className="page-title">Brew &amp; Blossom Event Catering</h1>
          <p className="page-description" style={{ color: '#FAF7F2' }}>
            Bring handcrafted coffees, fresh pastries, and boutique dessert bars
            to your next corporate event or private celebration.
          </p>
        </div>
      </section>

      {/* CATERING PACKAGES, TABLE & BOOKING FORM */}
      <main className="container page-content">
        {/* CATERING PACKAGES GRID */}
        <div
          className="catering-packages-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div
            className="catering-card"
            style={{
              background: '#FFF',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            }}
          >
            <div className="contact-icon" style={{ marginBottom: '1rem' }}>
              <i className="fa-solid fa-mug-hot" aria-hidden="true"></i>
            </div>
            <h2
              style={{
                fontSize: '1.3rem',
                color: 'var(--espresso-dark)',
                marginBottom: '0.5rem',
              }}
            >
              Morning Espresso Bar
            </h2>
            <p
              style={{
                color: '#3A322C',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              Mobile espresso setup with baristas, featuring signature lattes,
              pour-overs, and loose-leaf teas.
            </p>
            <span
              style={{
                fontWeight: 700,
                color: '#8A6828',
                fontSize: '1.1rem',
              }}
            >
              Starting at $250
            </span>
          </div>

          <div
            className="catering-card"
            style={{
              background: '#FFF',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            }}
          >
            <div className="contact-icon" style={{ marginBottom: '1rem' }}>
              <i className="fa-solid fa-cookie-bite" aria-hidden="true"></i>
            </div>
            <h2
              style={{
                fontSize: '1.3rem',
                color: 'var(--espresso-dark)',
                marginBottom: '0.5rem',
              }}
            >
              Pastry &amp; Bakery Platter
            </h2>
            <p
              style={{
                color: '#3A322C',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              Assorted butter croissants, savory focaccia bites, and fruit tarts
              baked fresh the morning of your event.
            </p>
            <span
              style={{
                fontWeight: 700,
                color: '#8A6828',
                fontSize: '1.1rem',
              }}
            >
              Starting at $180
            </span>
          </div>

          <div
            className="catering-card"
            style={{
              background: '#FFF',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            }}
          >
            <div className="contact-icon" style={{ marginBottom: '1rem' }}>
              <i className="fa-solid fa-cake-candles" aria-hidden="true"></i>
            </div>
            <h2
              style={{
                fontSize: '1.3rem',
                color: 'var(--espresso-dark)',
                marginBottom: '0.5rem',
              }}
            >
              Grand Celebration Spread
            </h2>
            <p
              style={{
                color: '#3A322C',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
              }}
            >
              Full dessert &amp; drink experience featuring French macarons, tres
              leches slices, and custom drink pairings.
            </p>
            <span
              style={{
                fontWeight: 700,
                color: '#8A6828',
                fontSize: '1.1rem',
              }}
            >
              Starting at $450
            </span>
          </div>
        </div>

        {/* CATERING PACKAGE COMPARISON TABLE */}
        <div
          className="catering-table-container"
          style={{
            maxWidth: '950px',
            margin: '0 auto 4rem auto',
            background: '#FFF',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
            overflowX: 'auto',
          }}
        >
          <div className="text-center" style={{ marginBottom: '1.5rem' }}>
            <span
              className="brand-badge"
              style={{ marginBottom: '0.5rem', display: 'inline-block' }}
            >
              Package Comparison
            </span>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--espresso-dark)' }}>
              Catering Offerings Overview
            </h2>
          </div>

          <table className="catering-table">
            <thead>
              <tr>
                <th scope="col">Package Name</th>
                <th scope="col">Best Suited For</th>
                <th scope="col">Includes</th>
                <th scope="col">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Morning Espresso Bar</strong>
                </td>
                <td>Corporate meetings &amp; morning mixers</td>
                <td>
                  Mobile espresso setup, professional baristas, signature
                  lattes, pour-overs, and teas
                </td>
                <td>$250</td>
              </tr>
              <tr>
                <td>
                  <strong>Pastry &amp; Bakery Platter</strong>
                </td>
                <td>Office breakfasts &amp; casual gatherings</td>
                <td>
                  Assorted butter croissants, savory focaccia bites, and fresh
                  seasonal fruit tarts
                </td>
                <td>$180</td>
              </tr>
              <tr>
                <td>
                  <strong>Grand Celebration Spread</strong>
                </td>
                <td>Weddings, galas, &amp; large celebrations</td>
                <td>
                  Full dessert experience with French macarons, tres leches
                  slices, and drink pairings
                </td>
                <td>$450</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CATERING REQUEST FORM */}
        <div
          className="contact-form-card"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <span
              className="brand-badge"
              style={{ marginBottom: '0.5rem', display: 'inline-block' }}
            >
              Reserve Your Date
            </span>
            <h2 style={{ fontSize: '2rem', color: 'var(--espresso-dark)' }}>
              Request a Catering Quote
            </h2>
          </div>

          {submitted ? (
            <div
              role="status"
              className="contact-form"
              style={{ textAlign: 'center' }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                Thank you! Your catering inquiry has been submitted to Brew
                &amp; Blossom Cafe.
              </p>
              <button
                type="button"
                className="btn-catering"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {errorMsg && (
                <p role="alert" style={{ color: 'crimson', marginBottom: '1rem' }}>
                  {errorMsg}
                </p>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                }}
              >
                <div className="form-group">
                  <label htmlFor="c-name">Full Name</label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-email">Email Address</label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                }}
              >
                <div className="form-group">
                  <label htmlFor="c-date">Event Date</label>
                  <input
                    type="date"
                    id="c-date"
                    name="event_date"
                    required
                    value={formData.event_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-guests">Estimated Guest Count</label>
                  <input
                    type="number"
                    id="c-guests"
                    name="guest_count"
                    placeholder="e.g. 35"
                    required
                    value={formData.guest_count}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-package">Preferred Package</label>
                <select
                  id="c-package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-cream)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <option value="espresso-bar">Morning Espresso Bar</option>
                  <option value="pastry-platter">
                    Pastry &amp; Bakery Platter
                  </option>
                  <option value="grand-spread">
                    Grand Celebration Spread
                  </option>
                  <option value="custom">Custom Experience</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="c-details">
                  Event Details &amp; Special Requests
                </label>
                <textarea
                  id="c-details"
                  name="details"
                  rows="5"
                  placeholder="Tell us about your event, venue location, dietary preferences, or timing..."
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-catering"
                disabled={submitting}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  padding: '1rem',
                }}
              >
                {submitting ? 'Submitting...' : 'Submit Catering Inquiry'}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
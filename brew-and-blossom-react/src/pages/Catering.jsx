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
        setErrorMsg(
          'There was a problem submitting your inquiry. Please try again.'
        );
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Elevate Your Gatherings</span>
          <h1 className="page-title">Brew &amp; Blossom Event Catering</h1>
          <p className="page-description page-description-light">
            Bring handcrafted coffees, fresh pastries, and boutique dessert bars
            to your next corporate event or private celebration.
          </p>
        </div>
      </section>

      <main className="container page-content">
        <div className="catering-packages-grid">
          <div className="catering-card">
            <div className="contact-icon mb-1">
              <i className="fa-solid fa-mug-hot" aria-hidden="true"></i>
            </div>
            <h2 className="catering-card-title">Morning Espresso Bar</h2>
            <p className="catering-card-desc">
              Mobile espresso setup with baristas, featuring signature lattes,
              pour-overs, and loose-leaf teas.
            </p>
            <span className="catering-card-price">Starting at $250</span>
          </div>

          <div className="catering-card">
            <div className="contact-icon mb-1">
              <i className="fa-solid fa-cookie-bite" aria-hidden="true"></i>
            </div>
            <h2 className="catering-card-title">Pastry &amp; Bakery Platter</h2>
            <p className="catering-card-desc">
              Assorted butter croissants, savory focaccia bites, and fruit tarts
              baked fresh the morning of your event.
            </p>
            <span className="catering-card-price">Starting at $180</span>
          </div>

          <div className="catering-card">
            <div className="contact-icon mb-1">
              <i className="fa-solid fa-cake-candles" aria-hidden="true"></i>
            </div>
            <h2 className="catering-card-title">Grand Celebration Spread</h2>
            <p className="catering-card-desc">
              Full dessert &amp; drink experience featuring French macarons, tres
              leches slices, and custom drink pairings.
            </p>
            <span className="catering-card-price">Starting at $450</span>
          </div>
        </div>

        <div className="catering-table-container">
          <div className="text-center mb-1-5">
            <span className="brand-badge badge-inline">Package Comparison</span>
            <h2 className="catering-table-heading">
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

        <div className="contact-form-card catering-form-wrapper">
          <div className="text-center mb-2">
            <span className="brand-badge badge-inline">Reserve Your Date</span>
            <h2 className="catering-form-heading">Request a Catering Quote</h2>
          </div>

          {submitted ? (
            <div role="status" className="contact-form text-center">
              <p className="mb-1-25">
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
                <p role="alert" className="form-error">
                  {errorMsg}
                </p>
              )}

              <div className="form-row-2">
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

              <div className="form-row-2">
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
                  className="form-select-cream"
                  value={formData.package}
                  onChange={handleChange}
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
                className="btn-catering btn-full-lg"
                disabled={submitting}
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
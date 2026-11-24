import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      const response = await fetch('https://formspree.io/f/mrpprprp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(
          'There was a problem sending your message. Please try again.'
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
          <span className="brand-badge">Get in Touch</span>
          <h1 className="page-title">Contact &amp; Community</h1>
          <p className="page-description">
            We would love to hear from you. Reach out with questions, feedback,
            or general inquiries.
          </p>
        </div>
      </section>

      <main className="container page-content">
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <span className="brand-badge badge-inline">Reach Out</span>
            <h2>We&apos;d Love to Hear From You</h2>
            <p className="text-muted-intro">
              Have a question about our menu, dietary options, or private cafe
              reservations? Send us a note and our team will get back to you
              shortly.
            </p>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Email Us</h3>
                <p>
                  <a
                    href="mailto:dhritidhingra17@gmail.com"
                    className="plain-link"
                  >
                    dhritidhingra17@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:9015550199" className="plain-link">
                    (901) 555-0199
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fa-solid fa-share-nodes" aria-hidden="true"></i>
              </div>
              <div>
                <h3>Follow Our Journey</h3>
                <div className="social-links-row">
                  <a
                    href="https://www.instagram.com/dhriti_dhingraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <i
                      className="fa-brands fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/dhriti.dhingra.2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div role="status" className="contact-form text-center">
                <p className="mb-1-25">
                  Thank you for reaching out! Your message has been sent to Brew
                  &amp; Blossom Cafe.
                </p>
                <button
                  type="button"
                  className="btn-catering"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMsg && (
                  <p role="alert" className="form-error">
                    {errorMsg}
                  </p>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="General Inquiry, Feedback, etc."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-catering btn-full"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
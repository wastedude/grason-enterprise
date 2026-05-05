import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const products = [
  {
    icon: '👕',
    bg: '#1a2340',
    name: 'School Uniforms',
    desc: 'Quality uniforms for primary, secondary and tertiary institutions. Custom colours, cresting and bulk orders welcome.',
  },
  {
    icon: '👔',
    bg: '#2a1a10',
    name: 'T-Shirts',
    desc: 'Plain and branded t-shirts in all sizes. Perfect for events, staff wear, promotions and merchandise.',
  },
  {
    icon: '🧶',
    bg: '#10251a',
    name: 'Polo Shirts',
    desc: 'Premium corporate and casual polo shirts. Embroidery and printing available. Minimum order flexible.',
  },
  {
    icon: '⚽',
    bg: '#1a1025',
    name: 'Sports Jerseys',
    desc: 'Custom football, basketball and athletics jerseys for clubs, schools and corporate teams.',
  },
];

const services = [
  {
    icon: '🖨️',
    tag: 'Office Services',
    name: 'Photocopying & Printing',
    desc: 'Black & white and full-colour printing for documents, flyers, posters, banners and more. Fast turnaround.',
  },
  {
    icon: '✨',
    tag: 'Decoration',
    name: 'Branding & Labelling',
    desc: 'Logo branding on apparel and accessories. Custom labels and tags for garments and products.',
  },
  {
    icon: '🔥',
    tag: 'Transfer Tech',
    name: 'DTF Printing',
    desc: 'Direct-to-Film transfers for vibrant, full-colour prints on any fabric. No minimums, durable results.',
  },
  {
    icon: '✂️',
    tag: 'Special Finish',
    name: 'No-Cut Transfers',
    desc: 'Seamless heat transfers with no visible edges. Perfect for detailed designs and multicolour graphics.',
  },
  {
    icon: '📣',
    tag: 'Marketing',
    name: 'Promotional Items',
    desc: 'Branded caps, bags, mugs, pens and more. Full corporate gifting solutions for every budget.',
  },
  {
    icon: '🎨',
    tag: 'Design',
    name: 'Custom Design',
    desc: 'In-house graphic design for logos, uniforms and print materials. From concept to final product.',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Same-day and next-day options available for urgent orders. We understand your deadlines.',
  },
  {
    icon: '🏆',
    title: 'Premium Quality',
    desc: 'We source the best fabrics and use industry-leading equipment for lasting results.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    desc: 'Bulk discounts available. Transparent quotes with no hidden costs.',
  },
  {
    icon: '🤝',
    title: 'End-to-End Service',
    desc: 'From design to delivery — we handle everything under one roof.',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <Head>
        <title>Grayson Enterprises | Printing & Branding</title>
        <meta name="description" content="Grayson Enterprises — Your one-stop printing, branding and uniform shop. School uniforms, t-shirts, polo shirts, jerseys, DTF, no-cut transfers and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">GRAYSON <span>ENT.</span></a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote →</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">Printing · Branding · Uniforms</span>
          <h1 className="hero-title">
            WEAR YOUR
            <span className="gold">BRAND</span>
            PROUDLY.
          </h1>
          <p className="hero-subtitle">
            Grayson Enterprises delivers premium school uniforms, corporate wear,
            custom printing and branding — all under one roof.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="#products" className="btn-outline">View Products</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...Array(2)].map((_, i) =>
            ['School Uniforms', 'T-Shirts', 'Polo Shirts', 'Jerseys', 'DTF Printing', 'No-Cut Transfers', 'Branding', 'Labelling', 'Photocopying', 'Banners'].map((item, j) => (
              <span key={`${i}-${j}`} className="ticker-item">{item} <span className="ticker-dot">◆</span></span>
            ))
          )}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products">
        <div className="reveal">
          <p className="section-label">What We Make</p>
          <h2 className="section-title">OUR PRODUCTS</h2>
          <p className="section-body">Quality garments for schools, corporates, clubs and individuals. Custom branding on every piece.</p>
        </div>
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="product-img" style={{ background: p.bg }}>
                {p.icon}
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="services-header reveal">
          <p className="section-label">What We Do</p>
          <h2 className="section-title light">OUR SERVICES</h2>
          <p className="section-body" style={{ color: 'rgba(245,245,240,0.45)' }}>
            From photocopying to full-scale garment branding — we're your complete print and production partner.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="why-grid">
          <div className="reveal">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">BUILT ON TRUST & QUALITY</h2>
            <p className="section-body">
              Grayson Enterprises has been the go-to printing and branding partner for schools, businesses and individuals.
              We combine cutting-edge technology with old-fashioned dedication to quality.
            </p>
            <div className="why-stats">
              <div className="stat-box">
                <div className="stat-num">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">24hr</div>
                <div className="stat-label">Rush Turnaround</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100%</div>
                <div className="stat-label">Quality Guaranteed</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">5★</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
          </div>
          <div className="why-features reveal" style={{ transitionDelay: '0.15s' }}>
            {features.map((f, i) => (
              <div className="why-feature" key={i}>
                <div className="why-feature-icon">{f.icon}</div>
                <div className="why-feature-text">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="section-label">Let&apos;s Work Together</p>
            <h2>GET A FREE QUOTE TODAY</h2>
            <p>
              Ready to bring your brand to life? Send us a message and we&apos;ll get back to you
              with a custom quote within 24 hours.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">📞</div>
              <span>+254 700 000 000</span>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">✉️</div>
              <span>info@graysonenterprises.co.ke</span>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">🕐</div>
              <span>Mon – Sat: 8am – 6pm</span>
            </div>
          </div>

          <form className="contact-form reveal" style={{ transitionDelay: '0.15s' }} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@company.com" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+254 700 000 000" />
            </div>
            <div className="form-group">
              <label>Service Interested In</label>
              <select required>
                <option value="">Select a service...</option>
                <option>School Uniforms</option>
                <option>T-Shirts / Polo Shirts</option>
                <option>Sports Jerseys</option>
                <option>DTF Printing</option>
                <option>No-Cut Transfers</option>
                <option>Photocopying & Printing</option>
                <option>Branding & Labelling</option>
                <option>Promotional Items</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message / Order Details</label>
              <textarea rows="4" placeholder="Tell us about your order — quantity, colours, timeline..." required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>
              Send Quote Request →
            </button>
            <div className={`form-success ${submitted ? 'show' : ''}`}>
              ✅ Your message has been sent! We&apos;ll be in touch within 24 hours.
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">GRAYSON <span>ENT.</span></div>
        <span className="footer-copy">© {new Date().getFullYear()} Grayson Enterprises. All rights reserved.</span>
        <ul className="footer-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </>
  );
}

import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#welcome">Welcome</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <address>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </address>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Footer };


function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="#welcome">Welcome</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      <address>
        Contact us at:{" "}
        <a href="mailto:contact@example.com">contact@example.com</a>
      </address>

      <div className="social-media">
        {/* Social media links */}
        <a href="https://twitter.com/example" aria-label="Twitter">
          Twitter
        </a>{" "}
        |
        <a href="https://facebook.com/example" aria-label="Facebook">
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;

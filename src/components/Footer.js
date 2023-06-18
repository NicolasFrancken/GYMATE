import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer-container">
      <div className="Footer-top">
        <div className="Footer-left">
          <h2>
            GYM<span>ATE</span>
          </h2>
          <div className="Footer-links">
            <a href="instagram">
              <i className="bx bx-sm bxl-instagram"></i>
            </a>
            <a href="facebook">
              <i className="bx bx-sm bxl-facebook-square"></i>
            </a>
            <a href="gmail">
              <i className="bx bx-sm bxl-gmail"></i>
            </a>
          </div>
        </div>
        <div className="Footer-right">
          <a href="policy">Privacy Policy</a>
          <a href="terms">Terms and Conditions</a>
          <a href="customerservice">Customer Service</a>
        </div>
      </div>
      <div className="Footer-bottom">
        <p>Copyright © 2023 GYMATE Franchising.</p>
      </div>
    </footer>
  );
}

export default Footer;

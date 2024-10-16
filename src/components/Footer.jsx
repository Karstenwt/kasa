import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img
          src="/image/LOGO_footer.png"
          alt="Kasa Logo"
          className="footer__logo"
        />
        <p className="footer__text">© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

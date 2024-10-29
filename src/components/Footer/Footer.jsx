import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img
          src={`${process.env.PUBLIC_URL}/image/LOGO_footer.png`}
          alt="Kasa Logo"
          className="footer__logo"
        />
        <p className="footer__text">
          © 2020 Kasa. All<span className="mobile-line-break"> </span>rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

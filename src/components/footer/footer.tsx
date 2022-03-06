import React, { ReactElement } from "react";
import "./footer.css";
import comune from "../../images/comune.png";
import regione from "../../images/regione.png";

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="circleWrapper" style={{ width: '6rem', height: '6rem', marginBottom: '-1rem'}}>
        <h4 className="text">In collaborazione con</h4>
      </div>
      <div className="logos">
        <div className="circleWrapper">
          <img
            className="imageComune"
            src={comune}
            alt="comune di cagliari logo"
          />
        </div>
        <div className="circleWrapper">
          <img
            className="imageRegione"
            src={regione}
            alt="regione sardegna logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

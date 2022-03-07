import React, { ReactElement } from "react";
import "./footer.css";
import comune from "../../images/comune.png";
import regione from "../../images/regione.png";

const FooterBar = (): ReactElement => {
  return (
    <footer className="footer">
          <img
            className="imageComune"
            src={comune}
            alt="comune di cagliari logo"
          />
          <img
            className="imageRegione"
            src={regione}
            alt="regione sardegna logo"
          />
    </footer>
  );
};

export default FooterBar;

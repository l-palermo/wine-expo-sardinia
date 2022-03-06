import "./navigation.css";
import wineExpoLogo from "../../images/wine-expo-logo.png";

function Navigation() {
  return (
    <nav className="navigation">
      <img className="imageLogo" src={wineExpoLogo} alt="" />
    </nav>
  );
}

export default Navigation;

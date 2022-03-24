import "./App.css";
import NavigationBar from "./components/navigation-bar";
import BackgroundImage from "./components/background-image";
import PageContent from "./components/page-content";
import FooterBar from "./components/footer-bar";
import { ReactElement } from "react";

function App(): ReactElement {
  // window.screen.orientation.lock("natural");
  return (
    <div className="app">
      <BackgroundImage />
      <header className="pageWrapper">
        <NavigationBar />
        <PageContent />
        <FooterBar />
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import NavigationBar from "./components/navigation-bar";
import BackgroundImage from "./components/background-image";
import PageContent from "./components/page-content";
import Email from "./components/email";
import FooterBar from "./components/footer-bar";
import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <div className="app">
      <BackgroundImage />
      <header className="pageWrapper">
        {/* <Navigation /> */}
        <NavigationBar />
        <PageContent />
        <Email />
        <FooterBar />
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;

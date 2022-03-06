import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
// import Navigation from "./components/navigation";
import NavigationBar from "./components/navigation-bar";
import BackgroundImage from "./components/background-image";
import PageContent from "./components/page-content";
import Email from "./components/email";
import FooterBar from "./components/footer-bar";

function App() {
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

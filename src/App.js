import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ActionDiv from "./components/Action-div/Action-div";
import BoostDiv from "./components/Boost-div/Boost-div";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <ActionDiv />
      <BoostDiv />
      <Footer />
    </div>
  );
}

export default App;

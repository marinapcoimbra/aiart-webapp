import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import Login from "./components/login";
import Registration from "./components/registration";
import UserPage from "./components/userpage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <LandingPage />
      <Login />
      <Registration />
      <UserPage />
    </div>
  );
}

export default App;

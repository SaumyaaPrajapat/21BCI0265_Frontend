import React from "react";
import "./App.css";
import Header from "./pages/Header";
import SecHeader from "./pages/SecHeader";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SecHeader />
      <MainPage />
    </div>
  );
};

export default App;

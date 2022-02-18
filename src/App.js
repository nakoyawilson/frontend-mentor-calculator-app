import { useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [bodyClass, setBodyClass] = useState("theme-one");
  document.querySelector("body").classList = bodyClass;

  const handleThemeChange = (e) => {
    const themeSelected = e.target.id;
    if (themeSelected === "theme-one") {
      setBodyClass("theme-one");
    } else if (themeSelected === "theme-two") {
      setBodyClass("theme-two");
    } else if (themeSelected === "theme-three") {
      setBodyClass("theme-three");
    }
  };

  return (
    <div className="App">
      <Header handleThemeChange={handleThemeChange} />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;

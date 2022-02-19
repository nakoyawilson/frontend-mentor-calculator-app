import { useState, useEffect } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [bodyClass, setBodyClass] = useState("theme-one");
  const [switchPosition, setSwitchPosition] = useState("");
  const [screenDisplay, setScreenDisplay] = useState("399,981");
  const [mathExpression, setMathExpression] = useState("");

  document.querySelector("body").classList = bodyClass;

  const handleThemeChange = (e) => {
    const themeSelected = e.target.id;
    if (themeSelected === "theme-one") {
      setBodyClass("theme-one");
      setSwitchPosition("");
    } else if (themeSelected === "theme-two") {
      setBodyClass("theme-two");
      setSwitchPosition("position-two");
    } else if (themeSelected === "theme-three") {
      setBodyClass("theme-three");
      setSwitchPosition("position-three");
    }
  };

  const handleNumberClick = (e) => {
    if (screenDisplay === "0" && e.target.value !== ".") {
      setScreenDisplay(e.target.value);
      setMathExpression(e.target.value);
    } else {
      let interimValue = screenDisplay;
      interimValue += e.target.value;
      setScreenDisplay(interimValue);
      setMathExpression(interimValue);
    }
  };

  // handleOperatorClick = (e) => {};

  const handleReset = () => {
    setScreenDisplay("0");
    setMathExpression("");
  };

  useEffect(() => {
    console.log(mathExpression);
  }, [mathExpression]);

  return (
    <div className="App">
      <Header
        handleThemeChange={handleThemeChange}
        toggleCircleClass={switchPosition}
      />
      <Calculator
        screenDisplay={screenDisplay}
        handleNumberClick={handleNumberClick}
        handleReset={handleReset}
      />
      <Footer />
    </div>
  );
};

export default App;

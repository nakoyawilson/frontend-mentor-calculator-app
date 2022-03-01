import { useState, useEffect } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  // const [bodyClass, setBodyClass] = useState(
  //   localStorage.getItem("nw-fem-calculator")
  //     ? localStorage.getItem("nw-fem-calculator")
  //     : window.matchMedia &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "theme-one"
  //     : "theme-two"
  // );
  const [bodyClass, setBodyClass] = useState("theme-one");
  const [switchPosition, setSwitchPosition] = useState(
    bodyClass === "theme-one"
      ? ""
      : bodyClass === "theme-two"
      ? "position-two"
      : "position-three"
  );
  // const [screenDisplay, setScreenDisplay] = useState("0");
  const [screenDisplay, setScreenDisplay] = useState("399,981");
  const [calcArray, setCalcArray] = useState([]);

  // Set initial color theme
  if (
    localStorage.getItem("nw-fem-calculator") === null ||
    localStorage.getItem("nw-fem-calculator") === ""
  ) {
    let themePreference;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      themePreference = "theme-one";
    } else {
      themePreference = "theme-two";
    }
    localStorage.setItem("nw-fem-calculator", themePreference);
  }

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
    let interimValue = screenDisplay.replace(/,/g, "");
    let interimArray = [...calcArray];
    if (interimArray[interimArray.length - 1] === "") {
      interimArray.pop();
    }
    if (
      interimArray[interimArray.length - 1] === "+" ||
      interimArray[interimArray.length - 1] === "-" ||
      interimArray[interimArray.length - 1] === "/" ||
      interimArray[interimArray.length - 1] === "*" ||
      interimArray.length === 0
    ) {
      interimValue = "0";
    }
    if (interimValue === "0" && e.target.value !== ".") {
      setScreenDisplay(e.target.value);
      interimArray.push(e.target.value);
    } else {
      interimValue += e.target.value;
      setScreenDisplay(
        interimValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      interimArray[interimArray.length - 1] = interimValue;
    }
    setCalcArray(interimArray);
  };

  const handleOperatorClick = (e) => {
    let interimArray = [...calcArray];
    if (interimArray[interimArray.length - 1] === "") {
      interimArray.pop();
    }
    if (
      interimArray[interimArray.length - 1] === "+" ||
      interimArray[interimArray.length - 1] === "-" ||
      interimArray[interimArray.length - 1] === "/" ||
      interimArray[interimArray.length - 1] === "*"
    ) {
      if (e.target.value === "x") {
        interimArray[interimArray.length - 1] = "*";
      } else {
        interimArray[interimArray.length - 1] = e.target.value;
      }
    } else {
      if (e.target.value === "x") {
        interimArray.push("*");
      } else {
        interimArray.push(e.target.value);
      }
    }
    setCalcArray(interimArray);
  };

  const handleReset = () => {
    setScreenDisplay("0");
    setCalcArray([]);
  };

  const handleDelete = () => {
    let interimArray = [...calcArray];
    let interimValue = interimArray[interimArray.length - 1].replace(/,/g, "");
    if (interimValue.length > 1) {
      interimValue = interimValue.slice(0, interimValue.length - 1);
      interimArray[interimArray.length - 1] = interimValue;
    } else if (interimValue.length <= 1) {
      interimValue = "0";
      interimArray[interimArray.length - 1] = "";
    }
    setCalcArray(interimArray);
    setScreenDisplay(
      interimValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const handleCalculation = () => {
    const evalRegex = /[^-()\d/*+.]/g;
    const displayRegex = /\B(?=(\d{3})+(?!\d))/g;
    const result = eval(calcArray.join("").replace(evalRegex, ""));
    setScreenDisplay(result.toString().replace(displayRegex, ","));
    setCalcArray([]);
  };

  useEffect(() => {
    localStorage.setItem("nw-fem-calculator", bodyClass);
  }, [bodyClass]);

  return (
    <div className="App">
      <Header
        handleThemeChange={handleThemeChange}
        toggleCircleClass={switchPosition}
      />
      <Calculator
        screenDisplay={screenDisplay}
        handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleReset={handleReset}
        handleDelete={handleDelete}
        handleCalculation={handleCalculation}
      />
      <Footer />
    </div>
  );
};

export default App;

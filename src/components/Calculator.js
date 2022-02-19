import Screen from "./Screen";
import Button from "./Button";

const Calculator = (props) => {
  return (
    <main>
      <Screen screenDisplay={props.screenDisplay} />
      <div className="keypad-grid">
        <Button
          buttonID="number-seven"
          buttonClasses="btn-color-one"
          buttonValue="7"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-eight"
          buttonClasses="btn-color-one"
          buttonValue="8"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-nine"
          buttonClasses="btn-color-one"
          buttonValue="9"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="delete"
          buttonClasses="btn-color-two"
          buttonValue="Del"
        />
        <Button
          buttonID="number-four"
          buttonClasses="btn-color-one"
          buttonValue="4"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-five"
          buttonClasses="btn-color-one"
          buttonValue="5"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-six"
          buttonClasses="btn-color-one"
          buttonValue="6"
          handleButtonClick={props.handleNumberClick}
        />
        <Button buttonID="add" buttonClasses="btn-color-one" buttonValue="+" />
        <Button
          buttonID="number-one"
          buttonClasses="btn-color-one"
          buttonValue="1"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-two"
          buttonClasses="btn-color-one"
          buttonValue="2"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-three"
          buttonClasses="btn-color-one"
          buttonValue="3"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="subtract"
          buttonClasses="btn-color-one"
          buttonValue="-"
        />
        <Button
          buttonID="decimal-point"
          buttonClasses="btn-color-one"
          buttonValue="."
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="number-zero"
          buttonClasses="btn-color-one"
          buttonValue="0"
          handleButtonClick={props.handleNumberClick}
        />
        <Button
          buttonID="divide"
          buttonClasses="btn-color-one"
          buttonValue="/"
        />
        <Button
          buttonID="multiply"
          buttonClasses="btn-color-one"
          buttonValue="x"
        />
        <Button
          buttonID="reset"
          buttonClasses="two-columns btn-color-two"
          buttonValue="Reset"
          handleButtonClick={props.handleReset}
        />
        <Button
          buttonID="equal"
          buttonClasses="two-columns btn-color-three"
          buttonValue="="
        />
      </div>
    </main>
  );
};

export default Calculator;

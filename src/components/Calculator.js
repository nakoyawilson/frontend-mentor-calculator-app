import Screen from "./Screen";
import Button from "./Button";

const Calculator = () => {
  return (
    <main>
      <Screen />
      <div className="keypad-grid">
        <Button
          buttonID="number-seven"
          buttonClasses="btn-color-one"
          buttonValue="7"
        />
        <Button
          buttonID="number-eight"
          buttonClasses="btn-color-one"
          buttonValue="8"
        />
        <Button
          buttonID="number-nine"
          buttonClasses="btn-color-one"
          buttonValue="9"
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
        />
        <Button
          buttonID="number-five"
          buttonClasses="btn-color-one"
          buttonValue="5"
        />
        <Button
          buttonID="number-six"
          buttonClasses="btn-color-one"
          buttonValue="6"
        />
        <Button buttonID="add" buttonClasses="btn-color-one" buttonValue="+" />
        <Button
          buttonID="number-one"
          buttonClasses="btn-color-one"
          buttonValue="1"
        />
        <Button
          buttonID="number-two"
          buttonClasses="btn-color-one"
          buttonValue="2"
        />
        <Button
          buttonID="number-three"
          buttonClasses="btn-color-one"
          buttonValue="3"
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
        />
        <Button
          buttonID="number-zero"
          buttonClasses="btn-color-one"
          buttonValue="0"
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

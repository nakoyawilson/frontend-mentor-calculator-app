const Button = (props) => {
  return (
    <button
      id={props.buttonID}
      className={props.buttonClasses}
      value={props.buttonValue}
      onClick={props.handleButtonClick}
    >
      {props.buttonValue}
    </button>
  );
};

export default Button;

const Button = (props) => {
  return (
    <button id={props.buttonID} className={props.buttonClasses}>
      {props.buttonValue}
    </button>
  );
};

export default Button;

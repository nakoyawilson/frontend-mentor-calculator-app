const Header = (props) => {
  return (
    <header>
      <h1 className="title">calc</h1>
      <div class="theme-wrapper">
        <div>
          <span class="theme">Theme</span>
        </div>
        <div class="toggle-wrapper">
          <form onChange={props.handleThemeChange}>
            <input
              type="radio"
              name="themes"
              id="theme-one"
              defaultChecked={true}
            />
            <label htmlFor="theme-one">1</label>
            <input type="radio" name="themes" id="theme-two" />
            <label htmlFor="theme-two">2</label>
            <input type="radio" name="themes" id="theme-three" />
            <label htmlFor="theme-three">3</label>
          </form>
          <span class="toggle-slider">
            <span class={`circle ${props.toggleCircleClass}`}></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

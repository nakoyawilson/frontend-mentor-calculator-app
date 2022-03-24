const Screen = ({ screenDisplay }) => {
  return (
    <section className="screen">
      <h2>
        {screenDisplay.length <= 15
          ? screenDisplay
          : screenDisplay.substring(0, 15)}
      </h2>
    </section>
  );
};

export default Screen;

let visibility = false;
const toggleVisibiliy = () => {
  // if (visibility) {
  //   visibility = false;
  //   render();
  // } else {
  //   visibility = true;
  //   render();
  // }
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visiblility Toggle</h1>
      <button onClick={toggleVisibiliy}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {/*visibility ? <p>Hey! some message here.</p> : false*/}
      {visibility && (
        <div>
          <p>Hey! some message here.</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();

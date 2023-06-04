const app = {
  title: "Indecision App",
  subtitle: "Put your life in the handle of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  let option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    renderApp();
  }
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender
const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>

      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>

      <button onClick={onRemoveAll}>Remove All</button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();

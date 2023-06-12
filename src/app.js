class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of computer.",
      options: ["thing one", "thing two", "thing three"],
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

// AddOption -> AddOption component here
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

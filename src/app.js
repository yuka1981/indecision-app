class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer.";
    const options = ["thing own", "thing two", "thing three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
        <button>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        <p>Add options here.</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

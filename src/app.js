class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of computer.</h2>
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
        <p>Options</p>
        <Option />
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option</p>
      </div>
    );
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

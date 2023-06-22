import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionText) => {
    this.setState((prevState) => ({
      // return a new array with condition is true
      options: prevState.options.filter((option) => optionText !== option),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };
  handleAddOption = (option) => {
    if (!option) {
      return "please input valid opton.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option exists.";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("can not get options");
    }
  }
  componentDidUpdate(preProps, preState) {
    if (preState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUmount() {
    console.log("componentWillUmount");
  }
  render() {
    const subtitle = "Put your life in the hands of computer.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show the details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey! some message here.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;
// const toggleVisibiliy = () => {
//   // if (visibility) {
//   //   visibility = false;
//   //   render();
//   // } else {
//   //   visibility = true;
//   //   render();
//   // }
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visiblility Toggle</h1>
//       <button onClick={toggleVisibiliy}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {/*visibility ? <p>Hey! some message here.</p> : false*/}
//       {visibility && (
//         <div>
//           <p>Hey! some message here.</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, document.getElementById("app"));
// };
//
// render();

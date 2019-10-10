// crete boiler plate

import React from "react";
import ReactDOM from "react-dom";
import AppTweak from "./AppTweak";
import Spinner from "./Spinner";

// create a class based component, we used extend to tell react that we are using react.component
class App extends React.Component {
  state = { lat: null, errMessage: "", time: "" };
  // this holds our call and callback function
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }
  // this shows our component on the screen, render only takes our return function
  render() {
    if (!this.state.errMessage && this.state.lat) {
      return (
        <div>
          <AppTweak lat={this.state.lat} time={this.state.time} />
        </div>
      );
    }
    if (this.state.errMessage && !this.state.lat) {
      return (
        <div>
          <h2>Error: {this.state.errMessage} </h2>
        </div>
      );
    }
    return (
      <div>
        <Spinner /> ;
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

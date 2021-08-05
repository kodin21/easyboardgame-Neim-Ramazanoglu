import "./App.css";
import Header from "./Components/Header/Header";
import GameArea from "./Components/GameArea/GameArea";
import { Component } from "react";

class App extends Component {
  state = {
    value: "",
  };
  pick = (e) => {
    debugger;
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Header pick={this.pick} />
        <GameArea value={this.state.value} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfPokemonToShow: 6,
    };
  }

  increaseNumber = () => {
    this.setState((prevState) => ({
      numberOfPokemonToShow: prevState.numberOfPokemonToShow + 1,
    }));
  };

  decreaseNumber = () => {
    this.setState((prevState) => ({
      numberOfPokemonToShow:
        prevState.numberOfPokemonToShow > 1
          ? prevState.numberOfPokemonToShow - 1
          : 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Number of pokemon to show: {this.state.numberOfPokemonToShow}
        </h1>
        <button onClick={this.increaseNumber}>Increase number</button>
        <button onClick={this.decreaseNumber}>Decrease number</button>
      </div>
    );
  }
}

export default App;

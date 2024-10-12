import React, { Component } from "react";

// Interface pour l'état
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  [x: string]: any;
  // Initialisation de l'état
  state: CounterState = {
    count: 0,
  };

  // Méthode d'incrémentation du compteur
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

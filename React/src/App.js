import React, { Component } from 'react';
import Count from './Count';
import Btn from './Btn';

// We are making a class component
// Class components are used when a component has state. sometimes called a stateful component
// Class components also have use of lifecycle events or hooks
class App extends Component {
  // The state holds the data for the application
  state = {
    counter: 0
  }

    // State is immutable meaning it can't be changed directly
  decrement = () => {
    // Best way to set the state is to save the state to a variable
    // then make changes to that variable
    let count = this.state.counter - 1;
    // State can then be set to that variable
    this.setState({
      counter: count
    })
  }

  increment = () => {
    let count = this.state.counter + 1;
    this.setState({
      counter: count
    })
  }

  // Class components need render function
  render() {
    return(
      <div>
        <Count counter={this.state.counter} />
        <Btn onClick={this.increment} btnType="Increment"></Btn>
        <Btn onClick={this.decrement} btnType="Decrement"></Btn>
      </div>
    )
  }
}

export default App;
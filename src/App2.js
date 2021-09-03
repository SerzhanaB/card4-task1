import React, { Component } from "react";
import "./App.css";

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }

 reset() {
    this.setState({count:0});
  }

  render() {
    
      return (
        <div>
         
          <h3> Теперь отображается </h3>
         
            <button onClick={this.increment}>Увеличим счетчик</button>
            <button onClick={this.decrement}>Уменьшим счетчик</button>
            <button onClick={this.reset}>Исходное</button>
            <h3> Значение счетчика {this.state.count} </h3>
        </div>
      );
    
  }
}

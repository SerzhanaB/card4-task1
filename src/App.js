import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ visibility: !state.visibility }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h1> Теперь отображается этот текст </h1>
          <button onClick={this.handleClick}>Нажми кнопку</button>
        </div>
      );
    } else {
      return (
        <p>
          <button onClick={this.handleClick}>Нажми кнопку</button>
        </p>
      );
    }
  }
}

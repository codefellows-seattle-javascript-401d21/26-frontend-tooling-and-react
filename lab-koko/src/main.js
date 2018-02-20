'use strict';
import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     content: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(() => ({content: say({text: faker.random.words(4)})}))
  }
  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <pre> {`${this.state.content}`}</pre>
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
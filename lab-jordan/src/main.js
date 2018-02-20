import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import {say, WHALE} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({content: Faker.random.word()}))
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click me</button>
        <pre>{say({ text: this.state.content, cow: WHALE})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';;
import Faker from 'faker';
import {say, SKELETON} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Please Click My Moo Button.',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({content: Faker.random.words()}))
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Moooooooooo!!!!!</button>
        <pre>{say({ text: this.state.content, cow: SKELETON})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

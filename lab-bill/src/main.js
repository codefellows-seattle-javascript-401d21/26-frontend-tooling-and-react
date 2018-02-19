import './styles/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import Faker from 'faker'
import {say} from 'cowsay'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Welcome to the home page',
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
        <pre>{say({ text: this.state.content})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
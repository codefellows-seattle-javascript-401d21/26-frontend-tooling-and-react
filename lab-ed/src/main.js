'use strict'

import './styles/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import cowsayBrowser from 'cowsay-browser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      say: 'wat?'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState(prevState => ({say: faker.lorem.slug()}))
  }

render() {
  return (
    <div className="app">
      <h1>Generate Turtlesay Lorem</h1>
      <button onClick={this.handleClick}>click me</button>
      <pre>{cowsayBrowser.say({ text: this.state.say, f: 'turtle' })}</pre>
    </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))

import './styles/main.scss'

// const React = require('react')
import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import { say, SQUIRREL, BONG, BUNNY, CHEESE, KITTY, KOALA, SHEEP } from 'cowsay'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="main_header">
        <h1>This is my nav!!</h1>
      </header>
    )
  }
}


class Heading extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <header className="main_header">
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'select one'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    let options = [SQUIRREL, BONG, BUNNY, CHEESE, KITTY, KOALA, SHEEP]

    this.setState({value: event.target.value});
    document.getElementById('cowshit').innerHTML = say({ cow: options[event.target.value], text: faker.random.words() })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your type of character!<br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">SQUIRREL</option>
            <option value="1">BONG</option>
            <option value="2">BUNNY</option>
            <option value="3">CHEESE</option>
            <option value="4">KITTY</option>
            <option value="5">KOALA</option>
            <option value="6">SHEEP</option>
          </select>
        </label>

      </form>
    );
  }
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({content: say({ cow: BONG, text: 'random email: ' + faker.internet.email() })}))
  }

  render() {
    return (
      <div className="app">
        <Heading />
       <Dropdown />
        <pre id="cowshit">
        </pre>
     </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
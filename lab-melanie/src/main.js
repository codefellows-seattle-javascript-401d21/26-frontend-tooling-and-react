'use strict';

import './styles/main.scss';

// const React = require('react')
import {say, KITTY, ELEPHANT, DRAGON, SHEEP, TURTLE, SQUIRREL, WHALE} from 'cowsay';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main_header">
        <h1>Cowsay What?</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: faker.hacker.phrase(),
      cow: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectClick = this.selectClick.bind(this);
  }

  handleClick() {
    this.setState({
      content: faker.hacker.phrase(),
    });
  }

  selectClick(event) {
    if(event.target.value === 'COW') {
      this.setState({cow: ''});
    }
    if(event.target.value === 'KITTY') {
      this.setState({cow: KITTY});
    }
    if(event.target.value === 'ELEPHANT') {
      this.setState({cow: ELEPHANT});
    }
    if(event.target.value === 'DRAGON') {
      this.setState({cow: DRAGON});
    }
    if(event.target.value === 'SHEEP') {
      this.setState({cow: SHEEP});
    }
    if(event.target.value === 'TURTLE') {
      this.setState({cow: TURTLE});
    }
    if(event.target.value === 'SQUIRREL') {
      this.setState({cow: SQUIRREL});
    }
    if(event.target.value === 'WHALE') {
      this.setState({cow: WHALE});
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <h2>Generate Cowsay Lorem</h2>
        <select onChange={this.selectClick}>
          <option value='COW'>Cow</option>
          <option value='KITTY'>Kitty</option>
          <option value='ELEPHANT'>Elephant</option>
          <option value='DRAGON'>Dragon</option>
          <option value='SHEEP'>Sheep</option>
          <option value='TURTLE'>Turtle</option>
          <option value='SQUIRREL'>Squirrel</option>
          <option value='WHALE'>Whale</option>
        </select>
        <button onClick={this.handleClick}>Click Me</button>
        <pre>{say({
          text: this.state.content,
          cow: this.state.cow,
        })}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

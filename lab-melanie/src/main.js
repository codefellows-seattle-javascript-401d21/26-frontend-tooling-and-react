'use strict';

import './styles/main.scss';

// const React = require('react')
import * as cowsay from 'cowsay';
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
    this.state = cowsay.say({
      text: `${faker.hacker.phrase()}`,
    });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      content: cowsay.say({
        text: `${faker.hacker.phrase()}`,
      }),
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <h2>Generate Cowsay Lorem</h2>
        <button onClick={this.handleClick}>Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

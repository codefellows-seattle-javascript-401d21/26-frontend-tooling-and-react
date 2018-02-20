import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import * as cowsay from 'cowsay'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main_header">
        <h1>This is my nav!!</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: faker.lorem.sentence(),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({content: faker.lorem.sentence() }));
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>Cowsay randomise</h1>
        <div className="buttonholder">
          <button onClick={this.handleClick}>Click</button>
        </div>
        <pre>{cowsay.say({ text: this.state.content})}</pre>

      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

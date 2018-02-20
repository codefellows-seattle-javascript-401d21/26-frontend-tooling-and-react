import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

const cowsay = require('cowsay');
const faker = require('faker');


class App extends React.Component{ // eslint-disable-line no-unused-vars

  constructor(props){
    super(props);
    this.state = {
      content: cowsay.say({
        text : faker.lorem.words(5),
        e : faker.lorem.word(),
        T : faker.lorem.word()}),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(() => ({content: cowsay.say({
      text : faker.lorem.words(5),
      e : faker.lorem.word(),
      T : faker.lorem.word()})}));
  }

  render(){
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>ClickMe!</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));


import { say, DEFAULT, SQUIRREL, MOOSE, REN, SHEEP, BUNNY, CHEESE, DRAGON, GHOSTBUSTERS } from 'cowsay';
import faker from 'faker';
import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='main_header'>
        <h1>Welcome to COWSAY!!!</h1>
      </header>
    );
  }
}


let test = [{val: DEFAULT, name: 'select'},{val:SQUIRREL, name: 'SQUIRREL'}, {val: MOOSE, name: 'MOOSE'}, {val: REN, name: 'REN'}, {val: SHEEP, name: 'SHEEP'}, {val: BUNNY, name: 'BUNNY'}, {val: CHEESE, name: 'CHEESE'}, {val:DRAGON, name: 'DRAGON'}, {val:GHOSTBUSTERS, name: 'GHOSTBUSTERS'} ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      value: 'select',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }


  handleClick() {
    this.setState(() => 
      ({content: say({
        text: faker.random.words(4),
        cow: `${this.state.value}`,
      })}));
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='picker'>
          <label className ='label'>pick a Animal  </label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            {test.map(option => {
              return <option value={option.val} key={option.name} >{option.name}</option>;
            })}
          </select>
        </div>
        <button onClick={this.handleClick}>Make Me Talk!</button>
        <pre>{`${this.state.content}`}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
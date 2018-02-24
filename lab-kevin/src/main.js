'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {say, list} from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      cow: 'cow',
      content: '',
    },

    this.handleSay = this.handleSay.bind(this);
    this.appSetState = this.appSetState.bind(this);
  }

  appSetState(cow){
     this.setState({cow: cow});
  }

  handleSay(){
    this.setState({content: say({f: this.state.cow, text: faker.company.catchPhrase()})});
  }

  render(){
    return (
      <main>
        <h1>Generate Cowsay Lorem</h1>
        <section>
          <div>
            <Cows appSetState={this.appSetState} />
            <button onClick={this.handleSay}>Click Me</button>
          </div>
          <span>
            <pre className="say-what">{this.state.content}</pre>
          </span>
        </section>
      </main>
    );
  }
}

class Cows extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      cows: [],
      selected: 'cow',
    }

    this.handleCowSelect = this.handleCowSelect.bind(this);
  }

  componentWillMount() {
    list((err, cows) => {
      this.setState({cows:cows.map((cow, i) => <option key={i} value={cow} >{cow}</option>)});
    })
  }

  handleCowSelect(e){
    console.log(this.props)
    let selectValue = e.target.value;
    this.setState({selected:  selectValue});
    this.props.appSetState(selectValue);
  }

  render(){
    return (
      <select onChange={this.handleCowSelect} value={this.state.selected} id="cows-select">
      <option value="cow"></option>
      {this.state.cows}
      </select>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


'use strict';

import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import * as cowsay from 'cowsay';
import faker from 'faker';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
     content: '',
    },

    this.say = this.say.bind(this);
  }

  say(){
    this.cow = cowsay[document.getElementById("cows-select").value]
    this.setState({content: cowsay.say({cow: this.cow, text: faker.company.catchPhrase()})});
  }

  render(){
    return (
      <main>
        <h1>Generate Cowsay Lorem</h1>
        <section>
          <div>
            <Cows />
            <button onClick={this.say}>Click Me</button>
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
    super(props)

    this.cows = Object.keys(cowsay).
    filter(cow => cow !== 'think' && cow !== 'say')
    .map((cow, i) => <option key={i} value={cow}>{cow}</option>)
  }

  render(){
    return (
      <select id="cows-select">
      <option value="DEFAULT">DEFAULT</option>
      {this.cows}
      </select>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


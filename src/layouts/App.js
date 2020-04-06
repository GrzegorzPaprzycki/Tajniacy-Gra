import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';

class App extends Component {
  state = {
    numbers: [1, 1, 1, 1],
    role: "/szefowie",
  }

  handleChangeRole = id => {
    this.setState({
      role: id,
    })
  }

  handleChangeNumber = e => {
    const numbers = this.state.numbers;
    numbers[e.target.id] = e.target.value;
    this.setState({
      numbers
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Tajniacy
      </header>
          <main>
            <section className="page">
              {<Page
                numbers={this.state.numbers}
                role={this.state.role}
                changeNumber={this.handleChangeNumber}
                changeRole={this.handleChangeRole}
              />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

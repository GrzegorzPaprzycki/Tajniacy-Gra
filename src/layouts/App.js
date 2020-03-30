import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Tajniacy
      </header>
          <main>
            <section className="page">
              {<Page />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
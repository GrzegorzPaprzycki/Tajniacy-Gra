import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import Header from './Header';

class App extends Component {
  state = {
    numbers: [1, 1, 1, 1],
    sumNumbers: 0,
    startingColor: "",
    colors: ["#292c24", "white", "white", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
    role: "/szefowie",
    cards: [
      { id: 0, text: "Melon", color: "blue", active: false, checked: false },
      { id: 1, text: "Lampa", color: "red", active: false, checked: false },
      { id: 2, text: "Koc", color: "white", active: false, checked: false },
      { id: 3, text: "Samolot", color: "red", active: false, checked: false },
      { id: 4, text: "Chiny", color: "white", active: false, checked: false },
      { id: 5, text: "Mieszkanie", color: "blue", active: false, checked: false },
      { id: 6, text: "Klawiatura", color: "white", active: false, checked: false },
      { id: 7, text: "Ronaldo", color: "#292c24", active: false, checked: false },
      { id: 8, text: "Bajka", color: "blue", active: false, checked: false },
      { id: 9, text: "Smok", color: "red", active: false, checked: false },
      { id: 10, text: "Chleb", color: "red", active: false, checked: false },
      { id: 11, text: "Kapeć", color: "red", active: false, checked: false },
      { id: 12, text: "Opona", color: "blue", active: false, checked: false },
      { id: 13, text: "Małpa", color: "white", active: false, checked: false },
      { id: 14, text: "Czapka", color: "blue", active: false, checked: false },
      { id: 15, text: "Oddech", color: "blue", active: false, checked: false },
      { id: 16, text: "Gips", color: "blue", active: false, checked: false },
      { id: 17, text: "Autostrada", color: "red", active: false, checked: false },
      { id: 18, text: "Zapach", color: "white", active: false, checked: false },
      { id: 19, text: "Skóra", color: "red", active: false, checked: false },
      { id: 20, text: "Batuta", color: "red", active: false, checked: false },
      { id: 21, text: "Wzrok", color: "blue", active: false, checked: false },
      { id: 22, text: "Skarpeta", color: "white", active: false, checked: false },
      { id: 23, text: "Plaża", color: "blue", active: false, checked: false },
      { id: 24, text: "Księżyc", color: "white", active: false, checked: false },
    ],
    selectedCard: -1,
    gameEnded: false,
    redChecked: 0,
    blueChecked: 0,
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

  handleDrawClick = () => {
    const { numbers } = this.state;
    // Sum of given numbers
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
      sumNumbers = sumNumbers + numbers[i] * 1
    }
    // Choosing starting color
    let startingColor = "";
    if (sumNumbers % 2 === 0) startingColor = "blue";
    else startingColor = "red";
    // Adding starting color to colors array
    let colors = [...this.state.colors];
    colors.push(startingColor);
    // Choosing card text and color
    const multiplicator = (numbers[0] * 1000 + numbers[1] * 100 + numbers[2] * 10 + numbers[3]);
    let cards = [...this.state.cards];
    cards.forEach(card => {
      const multiplicator2 = (multiplicator + card.id) * (card.id + 1);
      card.text = this.words[multiplicator2 % this.words.length];
      card.color = colors[multiplicator2 % colors.length];
      this.words.splice(multiplicator2 % this.words.length, 1);
      colors.splice(multiplicator2 % colors.length, 1);
    })
    // Decreasing counter of starting color by 1
    if (startingColor === "blue") {
      this.setState({ blueChecked: this.state.blueChecked - 1 })
    }
    if (startingColor === "red") {
      this.setState({ redChecked: this.state.redChecked - 1 })
    }
    // setState
    this.setState({ cards, sumNumbers, startingColor })
  }

  handleActiveCard = id => {
    if (!this.state.gameEnded) {
      const cards = [...this.state.cards];
      const selectedCard = cards.findIndex(card => card.id === id);
      if (!cards[selectedCard].checked) {
        cards.forEach(card => card.active = false);
        cards[selectedCard].active = true;
        this.setState({ cards, selectedCard });
      }
    }
  }

  removeActive = () => {
    const cards = [...this.state.cards];
    cards.forEach(card => card.active = false);
    this.setState({ cards })
  }

  handleTurnCard = () => {
    const cards = [...this.state.cards];
    const index = cards.findIndex(card => card.active);
    if (index >= 0) {
      if (cards[index].color === "blue") {
        this.setState({
          blueChecked: this.state.blueChecked + 1,
        })
      }
      if (cards[index].color === "red") {
        this.setState({
          redChecked: this.state.redChecked + 1,
        })
      }
      cards[index].text = "";
      cards[index].active = false;
      cards[index].checked = true;
      this.setState({ cards })
    }
  }

  handleEndGame = () => {
    this.setState({
      gameEnded: true,
    })
  }

  fetchData = () => {
    return fetch('words.txt')
      .then(res => res.text().then(text => text.split(/\n/)))
      .then(result => {
        this.words = result
      })
      .catch(err => console.log(err))
  }

  initializeState = () => {
    this.setState({
      numbers: [1, 1, 1, 1],
      sumNumbers: 0,
      startingColor: "",
      colors: ["#292c24", "white", "white", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      role: "/szefowie",
      cards: [
        { id: 0, text: "Melon", color: "blue", active: false, checked: false },
        { id: 1, text: "Lampa", color: "red", active: false, checked: false },
        { id: 2, text: "Koc", color: "white", active: false, checked: false },
        { id: 3, text: "Samolot", color: "red", active: false, checked: false },
        { id: 4, text: "Chiny", color: "white", active: false, checked: false },
        { id: 5, text: "Mieszkanie", color: "blue", active: false, checked: false },
        { id: 6, text: "Klawiatura", color: "white", active: false, checked: false },
        { id: 7, text: "Ronaldo", color: "#292c24", active: false, checked: false },
        { id: 8, text: "Bajka", color: "blue", active: false, checked: false },
        { id: 9, text: "Smok", color: "red", active: false, checked: false },
        { id: 10, text: "Chleb", color: "red", active: false, checked: false },
        { id: 11, text: "Kapeć", color: "red", active: false, checked: false },
        { id: 12, text: "Opona", color: "blue", active: false, checked: false },
        { id: 13, text: "Małpa", color: "white", active: false, checked: false },
        { id: 14, text: "Czapka", color: "blue", active: false, checked: false },
        { id: 15, text: "Oddech", color: "blue", active: false, checked: false },
        { id: 16, text: "Gips", color: "blue", active: false, checked: false },
        { id: 17, text: "Autostrada", color: "red", active: false, checked: false },
        { id: 18, text: "Zapach", color: "white", active: false, checked: false },
        { id: 19, text: "Skóra", color: "red", active: false, checked: false },
        { id: 20, text: "Batuta", color: "red", active: false, checked: false },
        { id: 21, text: "Wzrok", color: "blue", active: false, checked: false },
        { id: 22, text: "Skarpeta", color: "white", active: false, checked: false },
        { id: 23, text: "Plaża", color: "blue", active: false, checked: false },
        { id: 24, text: "Księżyc", color: "white", active: false, checked: false },
      ],
      selectedCard: -1,
      gameEnded: false,
      redChecked: 0,
      blueChecked: 0,
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div className="App">
          <header className="App-header">
            {<Header
              gameEnded={this.state.gameEnded}
            />}
          </header>
          <main>
            <section className="page">
              {<Page
                numbers={this.state.numbers}
                startingColor={this.state.startingColor}
                role={this.state.role}
                cards={this.state.cards}
                selectedCard={this.state.selectedCard}
                gameEnded={this.state.gameEnded}
                blueChecked={this.state.blueChecked}
                redChecked={this.state.redChecked}
                changeNumber={this.handleChangeNumber}
                changeRole={this.handleChangeRole}
                drawClick={this.handleDrawClick}
                activeCard={this.handleActiveCard}
                removeActive={this.removeActive}
                turnCard={this.handleTurnCard}
                endGame={this.handleEndGame}
                fetchData={this.fetchData}
                initializeState={this.initializeState}
              />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

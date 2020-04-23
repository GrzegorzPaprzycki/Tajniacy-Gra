import React, { Component } from 'react';
import Card from '../components/Card';
import '../styles/GuessPage.css';
import Message from '../components/Message';


class GuessPage extends Component {
    state = {
        frameColor: this.props.startingColor,
        winner: "...",
    }

    handleFinishTurn = () => {
        if (!this.props.gameEnded) {
            let frameColor = "";
            if (this.state.frameColor === "blue") {
                frameColor = "red"
            } else {
                frameColor = "blue"
            }
            this.setState({ frameColor })

            this.props.removeActive();
        }
    }

    handleTurnCard = () => {
        if (!this.props.gameEnded) {
            const cards = [...this.props.cards];
            const index = cards.findIndex(card => card.active);
            if (index >= 0) {
                this.props.turnCard();
                if (cards[this.props.selectedCard].color === "#292c24") {
                    if (this.state.frameColor === "blue") {
                        setTimeout(() => {
                            this.setState({
                                winner: "red",
                            })
                        }, 500);
                        this.props.endGame();
                    } else {
                        setTimeout(() => {
                            this.setState({
                                winner: "blue",
                            })
                        }, 500);
                        this.props.endGame();
                    }
                }
                else if (this.props.blueChecked === 7 && cards[this.props.selectedCard].color === "blue") {
                    setTimeout(() => {
                        this.setState({
                            winner: "blue",
                        })
                    }, 500);
                    this.props.endGame();
                }
                else if (this.props.redChecked === 7 && cards[this.props.selectedCard].color === "red") {
                    setTimeout(() => {
                        this.setState({
                            winner: "red",
                        })
                    }, 500);
                    this.props.endGame();
                }
                else if (cards[this.props.selectedCard].color !== this.state.frameColor && cards[this.props.selectedCard].color !== "#292c24") {
                    this.handleFinishTurn()
                }
            }
        }

    }

    render() {
        let cards = this.props.cards.map(card => <Card id={card.id} key={card.id} text={card.text} color={card.color} active={card.active} checked={card.checked} role={this.props.role} activeCard={this.props.activeCard} />)
        return (
            <>
                <Message
                    winner={this.state.winner}
                    gameEnded={this.props.gameEnded}
                />
                <div className="guessPage" style={{ backgroundColor: `${this.state.frameColor}` }}>
                    <button className={this.props.gameEnded ? "finishTurn gameEnded" : "finishTurn"} onClick={this.handleFinishTurn} >Zakończ turę</button>
                    <button className={this.props.gameEnded ? "turnCard gameEnded" : "turnCard"} onClick={this.handleTurnCard} >Odkryj kartę</button>
                    <section className="cards">
                        {cards}
                    </section>
                </div>
            </>
        );
    }
}

export default GuessPage;

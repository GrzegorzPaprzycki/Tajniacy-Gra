import React, { Component } from 'react';
import Card from '../components/Card';
import '../styles/GuessPage.css';


class GuessPage extends Component {
    state = {
        frameColor: this.props.activeColor,
    }
    render() {
        let cards = this.props.cards.map(card => <Card id={card.id} key={card.id} text={card.text} color={card.color} active={card.active} role={this.props.role} activeCard={this.props.activeCard} />)
        return (
            <>
                <div className="guessPage" style={{ backgroundColor: `${this.state.frameColor}` }}>
                    <button className="finishTurn">Zakończ turę</button>
                    <button className="turnCard" >Odkryj kartę</button>
                    <section className="cards">
                        {cards}
                    </section>
                </div>
            </>
        );
    }
}

export default GuessPage;

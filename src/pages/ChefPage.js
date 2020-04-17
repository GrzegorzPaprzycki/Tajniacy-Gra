import React, { Component } from 'react';
import Card from '../components/Card';
import '../styles/ChefPage.css';

class ChefPage extends Component {
    render() {
        let cards = this.props.cards.map(card => <Card id={card.id} key={card.id} text={card.text} color={card.color} role={this.props.role} />)
        return (
            <div style={{ backgroundColor: `${this.props.startingColor}` }} className="chefPage" >
                <section className="cards">
                    {cards}
                </section>
            </div>
        );
    }
}

export default ChefPage;
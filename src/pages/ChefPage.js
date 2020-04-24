import React from 'react';
import Card from '../components/Card';
import '../styles/ChefPage.css';
import { NavLink } from 'react-router-dom';

const ChefPage = (props) => {
    const { startingColor, role } = props;
    let cards = props.cards.map(card => <Card id={card.id} key={card.id} text={card.text} color={card.color} role={role} />)
    return (
        <>
            <button className="newGame"><NavLink to="/" exact >Nowa gra</NavLink></button>
            <div style={{ backgroundColor: `${startingColor}` }} className="chefPage" >
                <section className="cards">
                    {cards}
                </section>
            </div>
        </>
    );
}

export default ChefPage;

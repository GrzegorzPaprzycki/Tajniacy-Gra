import React, { Component } from 'react';


class Card extends Component {

    activeStyle = {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        letterSpacing: "normal",

    }

    checkedStyle = {
        backgroundColor: this.props.color
    }

    gameEndedStyle = {
        letterSpacing: "normal",
    }

    answerShownStyle = {
        backgroundColor: this.props.color,
        opacity: "35%",
        letterSpacing: "normal",
    }

    render() {
        const { role, color, id, text, active, checked, answerShown, activeCard, gameEnded } = this.props;
        if (role === "/szefowie") {
            return (
                <div style={{ backgroundColor: `${color}` }} id={id}>{text}</div>
            );
        } else {
            return (
                <div style={active ? this.activeStyle : checked ? this.checkedStyle : !gameEnded ? null : answerShown ? this.answerShownStyle : this.gameEndedStyle} id={id} onClick={() => activeCard(this.props.id)} >{text}</div>
            );
        }
    }


}

export default Card;
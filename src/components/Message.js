import React from 'react';
import '../styles/Message.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    const { gameEnded, winner, click } = props;
    return (
        <div className="message">
            <button className={gameEnded ? "newGame gameEnded" : "newGame"}><NavLink to="/" exact >Nowa gra</NavLink></button>
            <h2 className={gameEnded ? "gameEnded" : null} >{winner === "blue" ? "zwyciężył niebieski" : winner === "red" ? "zwyciężył czerwony" : "GAME OVER"}</h2>
            <button onClick={click} className={gameEnded ? "showAnswer answerShown" : "showAnswer"}>Pokaż rozwiązanie</button>
        </div>
    );
}

export default Message;
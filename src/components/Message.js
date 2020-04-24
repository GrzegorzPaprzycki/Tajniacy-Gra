import React from 'react';
import '../styles/Message.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className="message">
            <button className={props.gameEnded ? "newGame gameEnded" : "newGame"}><NavLink to="/" exact >Nowa gra</NavLink></button>
            <h2 className={props.gameEnded ? "gameEnded" : null} >{props.winner === "blue" ? "zwyciężył niebieski" : props.winner === "red" ? "zwyciężył czerwony" : "GAME OVER"}</h2>
            <button onClick={props.click} className={props.gameEnded ? "showAnswer answerShown" : "showAnswer"}>Pokaż rozwiązanie</button>
        </div>
    );
}

export default Message;
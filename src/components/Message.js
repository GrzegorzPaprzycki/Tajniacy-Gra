import React from 'react';
import '../styles/Message.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className="message">
            <button className={props.gameEnded ? "newGame gameEnded" : "newGame"}><NavLink to="/" exact >Nowa gra</NavLink></button>
            {/* {props.winner === "blue" ? <h2 className={props.gameEnded ? "gameEnded" : null} >GAME OVER - zwyciężył niebieski</h2> : props.winner === "red" ? <h2 className={props.gameEnded ? "gameEnded" : null} >GAME OVER - zwyciężył czerwony</h2> : null} */}
            <h2 className={props.gameEnded ? "gameEnded" : null} >{props.winner === "blue" ? "zwyciężył niebieski" : props.winner === "red" ? "zwyciężył czerwony" : "GAME OVER"}</h2>
        </div>
    );
}

export default Message;
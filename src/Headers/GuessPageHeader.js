import React from 'react';

const GuessPageHeader = (props) => {
    return (
        <h1 className={props.gameEnded ? "guessPageHeader gameEnded" : "guessPageHeader"}>Zgadywacze</h1>
    );
}

export default GuessPageHeader;
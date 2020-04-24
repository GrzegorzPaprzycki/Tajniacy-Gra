import React from 'react';

const Input = (props) => {
    const { id, numbers, changeNumber } = props;
    return (
        <input type="number" min="1" max="9" id={id} value={numbers[id]} onChange={changeNumber}  ></input>
    );
}

export default Input;
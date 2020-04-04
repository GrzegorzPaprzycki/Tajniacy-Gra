import React from 'react';

const Input = (props) => {
    return (
        <input type="number" min="1" max="9" id={props.id} value={props.numbers[props.id]} onChange={props.changeNumber}  ></input>
    );
}

export default Input;
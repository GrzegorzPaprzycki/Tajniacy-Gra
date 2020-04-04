import React from 'react';
import '../styles/HomePage.css';
import Input from '../components/Input';

const HomePage = (props) => {

    const inputs = [0, 1, 2, 3];
    const numberHolders = inputs.map(input => <Input key={input} id={input} numbers={props.numbers} changeNumber={props.changeNumber} />)

    return (
        <div className="home" >
            <h2>Podaj kod gry (4 dowolne cyfry)</h2>
            <form className="codeForm">
                {numberHolders}
                <button>DALEJ</button>
            </form>
        </div>
    );
}

export default HomePage;
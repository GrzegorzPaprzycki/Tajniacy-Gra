import React, { Component } from 'react';
import '../styles/HomePage.css';
import Input from '../components/Input';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {

    componentDidMount() {
        console.log('HomePage did mount');
        this.props.fetchData();
    }

    render() {
        const { numbers, drawClick, changeNumber } = this.props;
        const inputs = [0, 1, 2, 3];
        const numberHolders = inputs.map(input => <Input key={input} id={input} numbers={numbers} changeNumber={changeNumber} />)

        return (
            <div className="home" >
                <h2>Podaj kod gry (4 dowolne cyfry)</h2>
                <form className="codeForm">
                    {numberHolders}
                    <button onClick={drawClick} className="main" ><NavLink to="/page02" exact >DALEJ</NavLink></button>
                </form>
            </div>
        );
    }

}

export default HomePage;
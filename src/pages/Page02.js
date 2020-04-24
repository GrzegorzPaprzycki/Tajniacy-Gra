import React, { Component } from 'react';
import '../styles/Page02.css';
import { NavLink } from 'react-router-dom';

class Page02 extends Component {

    handleClick = (e) => {
        this.props.changeRole(e.target.id);
    }

    render() {
        const { role } = this.props;
        return (
            <div className="page02">
                <h2>Po której stronie chcesz grać?</h2>
                <div className="chooseSide">
                    <button id="/szefowie" name="firstButtonClass" className={role === "/szefowie" ? "active" : null} onClick={this.handleClick} >Szefowie</button>
                    <button id="/zgadujacy" name="secondButtonClass" className={role === "/zgadujacy" ? "active" : null} onClick={this.handleClick} >Zgadywacze</button>
                </div>
                <button className="main" ><NavLink to={role} exact >GRAJ</NavLink></button>
            </div>
        );
    }
}

export default Page02;

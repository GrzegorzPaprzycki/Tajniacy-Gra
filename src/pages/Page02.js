import React, { Component } from 'react';
import '../styles/Page02.css';
import { NavLink } from 'react-router-dom';

class Page02 extends Component {

    state = {
        firstButtonClass: "active",
        secondButtonClass: ""
    }

    handleClick = (e) => {
        this.setState({
            firstButtonClass: "",
            secondButtonClass: ""
        })
        this.setState({
            [e.target.name]: "active"
        })
        this.props.changeRole(e.target.id);
    }

    render() {
        return (
            <div className="page02">
                <h2>Po której stronie chcesz grać?</h2>
                <div className="chooseSide">
                    <button id="/szefowie" name="firstButtonClass" className={this.state.firstButtonClass} onClick={this.handleClick} >Szefowie</button>
                    <button id="/zgadujacy" name="secondButtonClass" className={this.state.secondButtonClass} onClick={this.handleClick} >Zgadywacze</button>
                </div>
                <button className="main" ><NavLink to={this.props.role} exact >GRAJ</NavLink></button>
            </div>
        );
    }
}

export default Page02;

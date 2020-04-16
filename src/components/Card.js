import React, { Component } from 'react';


class Card extends Component {

    activeStyle = {
        backgroundColor: 'yellow',
        fontWeight: 'bold'
    }

    standardStyle = {
        backgroundColor: '#eee'
    }

    render() {
        if (this.props.role === "/szefowie") {
            return (
                <div style={{ backgroundColor: `${this.props.color}` }} id={this.props.id}>{this.props.text}</div>
            );
        } else {
            return (
                <div style={this.props.active ? this.activeStyle : this.standardStyle} id={this.props.id} onClick={() => this.props.activeCard(this.props.id)} >{this.props.text}</div>
            );
        }
    }


}

export default Card;
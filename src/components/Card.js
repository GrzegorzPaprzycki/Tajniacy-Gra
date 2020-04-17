import React, { Component } from 'react';


class Card extends Component {

    activeStyle = {
        backgroundColor: 'yellow',
        fontWeight: 'bold'
    }

    checkedStyle = {
        backgroundColor: this.props.color
    }

    render() {
        if (this.props.role === "/szefowie") {
            return (
                <div style={{ backgroundColor: `${this.props.color}` }} id={this.props.id}>{this.props.text}</div>
            );
        } else {
            return (
                <div style={this.props.active ? this.activeStyle : this.props.checked ? this.checkedStyle : null} id={this.props.id} onClick={() => this.props.activeCard(this.props.id)} >{this.props.text}</div>
            );
        }
    }


}

export default Card;
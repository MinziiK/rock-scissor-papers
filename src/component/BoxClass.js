import React, { Component } from 'react'

export default class BoxClass extends Component {
    render() {
        return (
            <div className={this.props.result}>
            <h1>{this.props.title}</h1>
            <img 
                src={this.props.item && this.props.item.img}
                className="item-img"
                alt={this.props.item && this.props.item.name}/>
            <h2>{this.props.result}</h2>
            </div>
        );
        }
}
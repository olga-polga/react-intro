import React, { Component } from 'react';
class BaseComponent extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}
                 style={this.props.style}>

                <h1>{ this.props.title }</h1>
                 { this.props.children }
            </div>
        );
    }
}
export default BaseComponent
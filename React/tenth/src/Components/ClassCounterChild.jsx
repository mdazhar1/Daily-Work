import React, { Component } from 'react';

class ClassCounterChild extends Component {
    render() {
        return (
            <div>
                <h1>Count:{this.props.countValue} Chota Beta</h1>
            </div>
        );
    }
}

export default ClassCounterChild;
import React, { Component } from "react";
import ClassCounterChild from "./ClassCounterChild";

export class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    handleDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }
    render() {
        return (
            <div>
                <ClassCounterChild
                    countNumber={this.state.count}
                    countValue={this.state.count} />
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
import React,{Component} from 'react';

class OurMentors extends Component {
    state = { name: "abc", age: 24 };
    render() {
        return (
            <div>
                <h1>Class Component {this.state.name}</h1>
            </div>
        );
    }
};

export default OurMentors;
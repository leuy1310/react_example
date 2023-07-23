import React from "react";

class MyComponets extends React.Component {

    // state
    state = {
        name: "ThomNT9",
        address: "Kyoto",
        age: 26
    };

    handleClick(event) {
        console.log("Hello UyNL");
        console.log(this.state.name);

        this.setState({
            name: "Eric Cantona"
        })
    }

    hanldeOnMoverOver(e) {
        console.log(e);
    }
    
    // JSX
    render() {
        return (
            <div>
                <div>My name is {this.state.name} and I am from {this.state.age}</div>
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
            </div>
        );
    }
}

export default MyComponets;
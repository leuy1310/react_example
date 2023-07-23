import React from "react";

class MyComponets extends React.Component {

    // state
    state = {
        name: "ThomNT9",
        address: "Kyoto",
        age: 26
    }
    
    // JSX
    render() {
        return (
            <div>My name is {this.state.name} and I am from {this.state.address}</div>
        );
    }
}

export default MyComponets;
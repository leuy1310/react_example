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

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    
    // JSX
    render() {
        return (
            <div>
                <div>My name is {this.state.name} and I am from {this.state.age}</div>
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input
                        type="text"
                        onChange={(event) => {this.handleOnChange(event)}}
                    />
                </form>
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
            </div>
        );
    }
}

export default MyComponets;
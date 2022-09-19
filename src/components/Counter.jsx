import React, { Component } from "react";

class Counter extends Component{

    state = {
        count: 0,
    }

    counter = (e) =>{
        e.preventDefault();
        this.setState({
            count: this.state.count+1,
        })
    }

    render(){

        const count = this.state.count;
        const {children} = this.props;
        //const {render} = this.props; //use for render props

        return children(count, this.counter);
        //return render(count, this.counter); //use for render props
    }

}

export default Counter;
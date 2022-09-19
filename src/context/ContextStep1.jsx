import React, { Component } from 'react';
import ContextStep2 from "./ContextStep2"

class ContextStep1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
     
        return (
            <div>
                <ContextStep2 />
            </div>
        );
    }
}

export default ContextStep1;
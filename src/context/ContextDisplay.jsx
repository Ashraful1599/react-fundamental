import React, { Component } from 'react';
import ThemeContext from './ThemeContext'
class ContextDisplay extends Component {
    constructor(props){
        super(props);
    }
    render() {

        const {theme, switchTheme} = this.context;
     //   console.log(theme);
        return (
            <div>
             <h1 style={theme==="red"?{color: "red"}:{color: "blue"}}>This is Context Api practice</h1>
             <button style={{marginBottom:"30px"}} onClick={switchTheme}>Change the theme color</button>
            </div>
        );
    }
}

export default ContextDisplay;

ContextDisplay.contextType = ThemeContext;

//Use useContext for functional component becauuse useContext don't support for class compoent
import React, { Component } from 'react'
import ContextStep1 from "./ContextStep1"
import ThemeContext from './ThemeContext'

export default class Context extends Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'red',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'blue') {
                    return {
                        theme: 'red',
                    };
                }
                return {
                    theme: 'blue',
                };
            });
        },
    };

  render() {
    const {theme} = this.state
    return (
      <div>
      <ThemeContext.Provider value={this.state}><ContextStep1 /></ThemeContext.Provider>  
      </div>
    )
  }
}

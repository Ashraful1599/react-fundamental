import React, { Component } from 'react'

export default class Button extends Component {

//shouldComponentUpdate function stop repeat a component. like we stopped the button component repeating. **use only if component rendering time high
    // shouldComponentUpdate(nextProps){
    //     const {change2:currentChange} = this.props;
    //     const { change2: nextChange} = nextProps;
    //     if(currentChange === nextChange){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

  render() {
    const {change2,locale,country} = this.props;
    return (
        <div>
        <button onClick={()=> change2(locale, country)}>{(locale==="bn-BD")? "Change to Bangla" : "Chnage to English"}</button>
        </div>
    )
  }
}

import React, { Component } from 'react';
import Button from './Button';

class Task1 extends Component {

    //alwasy use constrator and props like this
    constructor(props){
        super(props);
        this.state = {
            locale: this.props.locale,
            country: this.props.country,
            date: new Date()
        }
        
    }
//componentDidMount is a call back funtion. it's call once the component rendered. 
    componentDidMount(){
      this.setinterval =  setInterval(()=>{
        this.setState({
            date: new Date()
        })
      },1000);
    }

// use the componentWillUnmount function to stop the asyncronus function behaviour. here we cleared the setinterval function. we can clear setTimeout also.
    componentWillUnmount(){
        clearInterval(this.setinterval);
    }

    //always use the arrow function to solve the undifined this issue like changeTimeZone function.
    changeTimeZone = (locale, country) =>{
        this.setState({
            locale: locale,
            country: country,
        })   

    }    
    changeTimeZone2 = (locale, country) =>{
        this.setState({
            locale: locale,
            country: country,
        })   

    }


    render() {
        const {date,locale, country} = this.state;
        let button;
        (locale === "bn-BD") ?
            button = (<Button  change2={this.changeTimeZone2} locale={"en-US"} country ={"USA"} />)
        :
            button = (<Button  change2={this.changeTimeZone2} locale={"bn-BD"} country ={"Bangladesh"} />);
        
        return (
            <div>
                <h1>{date.toLocaleTimeString(locale)} in {country}</h1>
                <button onClick={()=>this.changeTimeZone('en-us','USA')}>Click me to EN</button>
                {button}
                {/* always pass parameter seperetely as locale and country */}
            </div>
        );
    }
}

export default Task1;



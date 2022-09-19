import React, {Component} from 'react'

export default class Form extends Component {
    state = {
        name: "",
        email: "",
        textarea: "write here",
        select: ""
    }
    inputHandle = (e) => {
        //  console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, email, textarea, select} = this.state
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Name</legend>
                        <input
                        placeholder='Ashraful'
                        name='name'
                        type="text"
                        value={name}
                        onChange={this.inputHandle}/>
                    </fieldset>

                    <fieldset>
                        <legend>Email</legend>
                        <input
                        placeholder='ash@gmail.com'
                        name='email'
                        type="email"
                        value={email}
                        onChange={this.inputHandle}/>
                    </fieldset>

                    <fieldset>
                        <legend>Message</legend>
                        <textarea
                        name="textarea"
                        id=""
                        cols="30"
                        rows="10"
                        value={textarea}
                        onChange={this.inputHandle}></textarea>
                    </fieldset>

                    <fieldset>
                        <legend>Select</legend>
                        
                    <select value={"sel"} name="select" id="" onChange={this.inputHandle}>
                        <option value="sel">Select the option</option>
                        <option value="Value1">Value1</option>
                        <option value="value2">Value2</option>
                        <option value="Value3">Value3</option>
                    </select>
                    </fieldset>

                </form>

                <h2>Name: {name} </h2>
                <h2>Email: {email}</h2>
                <h2>Textarea: {textarea} </h2>
                <h2>Select: {select} </h2>
            </div>
        )
    }
}

import React, { useState } from 'react'

export default function ToDo() {
    const [todo, setTodo] = useState("Update this text by writting below");
    const [warning, setWarning] = useState("");

    const inputHandle = (e) =>{
        const inputValue = e.target.value;
        setTodo(inputValue);
        const updateWarning = inputValue.includes('ash')? 'He is an web developer' : '';
        setWarning(updateWarning);
    }

  return (
    <div>
        <p>{todo}</p>
        <h2>{warning || "Warning show here"}</h2>
        <textarea onChange={inputHandle} name="msg" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

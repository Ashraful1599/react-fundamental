import React, { useEffect, useRef, useState } from 'react'

export default function ToDo2() {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);


const [count, setCount] = useState(10);
const addOne = (e) =>{
    e.preventDefault();
    setCount((prevState)=> prevState+1)
}

const [toDo, setToDo] = useState({
    name: 'Ash', 
    address: 'Kha'
})
const inputHandle = (e) =>{
    setToDo({
        ...toDo,
        [e.target.name]: e.target.value
    })
}

useEffect(() => {
  document.title = `Clicked ${count} times`;
//use the return funtion like stop setInterval or setTimeout funtion
   return () =>{
   // console.log('useffect return')
   }
},[count])



const {name, address} = toDo;

  return (
    <div>
        <h1>{count}</h1>
        <p><button onClick={addOne}>Add 1</button></p>

        <p>{name} {address}</p>
        <input ref={inputRef} name='name' type="text" value={name} onChange={inputHandle} />
        <input name='address' type="text" value={address} onChange={inputHandle} />
    </div>
  )
}

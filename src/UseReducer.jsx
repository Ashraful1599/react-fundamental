import React, { useReducer } from 'react'

const initialState = 5;
const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return state +1;
        case "decriment":
            return state -1;
        default:
            return state;
    }
}

export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <p>Count - {count}</p>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decriment')}>Decriment</button>
    </div>
  )
}

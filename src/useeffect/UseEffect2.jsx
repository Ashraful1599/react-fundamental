import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    data: {},
    error: ''
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'success': 
        return {
            loading: false,
            data: state.data,
            error: ''
        }
        case 'fail': 
        return {
            loading: false,
            data: {},
            error: 'An error occuired'
        }
        default:
            return state
    }
}

export default function UseEffect2() {

    const [state, dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data)=>{
            dispatch({type:'success', data: data})
        })
        .catch((err)=>{
            dispatch({type:'fail',})
        })
    },[]);


  return (
    <div>
        <h2>{state.loading ? "...data is loading" : state.data.title}</h2>
        <h2>{state.error || null}</h2>
    </div>
  )
}

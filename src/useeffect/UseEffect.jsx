import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState("");

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data)=>{
            setLoading(false);
            setPost(data);
            setError("")
        })
        .catch((err)=>{
            setLoading(false);
            setPost({});
            setError("Unknow error occured");
        })
    },[]);
  return (
    <div>
        <h2>{loading ? "...data is loading" : post.title}</h2>
        <h2>{error || null}</h2>
    </div>
  )
}

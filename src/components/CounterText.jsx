import React, { Component } from 'react'

export default function CounterText({count,counter}) {

    return (
      <div><button onClick={counter}>Clicked {count} Times</button></div>
    )
}

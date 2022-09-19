import React from 'react'

export default function Task2({lists = []}) {
  return (
    <div>
      <ul>
      {lists.map((list)=>
       <li key={list}>{list}</li> 
      )}
      </ul>
    </div>
  )
}

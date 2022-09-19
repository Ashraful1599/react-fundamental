import React, { useEffect, useState } from 'react'
import useWindowWidthHook from './useWindowWidthHook'


export default function CustomHook() {

const onSmallScren = useWindowWidthHook(768);


  return (
    <div>
        <h2>{onSmallScren? "This is small screen": "This is large screen"}</h2>
    </div>
  )
}

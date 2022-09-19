import React, { useEffect, useState } from 'react'

export default function useWindowWidthHook(screenSize) {

    const [onSmallScren, setOnSmallScreen] = useState(false);
    
    useEffect(()=>{
        const checkResize = () =>{
            setOnSmallScreen(window.innerWidth<screenSize)
        }

        checkResize();
        window.addEventListener('resize', checkResize);
    },[screenSize]);


  return onSmallScren;
}

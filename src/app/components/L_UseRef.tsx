"use client"
import React, { useRef } from 'react'

const L_UseRef = () => {
    const ref = useRef(0);
    const handleClick = () => {
        console.group(ref.current)
        ref.current++;
    }
    return (
        <div>
            {ref.current}
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default L_UseRef
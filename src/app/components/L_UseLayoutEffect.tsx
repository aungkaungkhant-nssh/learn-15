"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'

const L_UseLayoutEffect = () => {
    const [show, setShow] = useState(false);
    const button = useRef<HTMLButtonElement>(null);
    const popup = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return;
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 300}px`
    }, [show])

    return (
        <div>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                Click Here
            </button>
            {
                show && (
                    <div style={{ position: "absolute" }} ref={popup}>Pop Up</div>
                )
            }

        </div>
    )
}

export default L_UseLayoutEffect
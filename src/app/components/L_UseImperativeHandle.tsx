"use client"
import React, { useImperativeHandle } from 'react'

const L_UseImperativeHandle = () => {
    const ref = React.useRef<HTMLInputElement>(null);
    return (
        <div>
            <CustomInput ref={ref} />
            <button onClick={() => ref.current?.focus()}>Focus</button>
        </div>
    )
}

interface CustomInputProps {
    ref: React.Ref<HTMLInputElement>;
}

const CustomInput = ({ ref }: CustomInputProps) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current?.focus();
            }
        };
    }, []);
    return <input ref={inputRef} />
}

export default L_UseImperativeHandle
"use client"
import React, { useDeferredValue, useEffect, useMemo, useState } from 'react'

const L_UseDeferred = () => {
    const [query, setQuery] = useState("");
    const deferredValue = useDeferredValue(query);
    useEffect(() => {
        console.log("Value ", query);
        console.log("Deferred Value", deferredValue);
        console.log("----End------")
    }, [query, deferredValue])
    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <List value={deferredValue} />
        </div>
    )
}

const List = ({ value }: { value: string }) => {
    const SIZE = 100;
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < SIZE; i++) {
            l.push(<div key={i}>{value}</div>)
        }
        return l;
    }, [value])
    return list;
}

export default L_UseDeferred
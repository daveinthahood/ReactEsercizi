import { useState } from "react"
import { useCounter } from "./useCounter"

export function Counter({initialValue = 0 }) {
    const{count, handleIncr, handleDecr, handleReset} = useCounter(initialValue)


    return (
        <div>
            <h2> Counter : {count} </h2>
            <button onClick={handleIncr}> Incr</button>
            <button onClick={handleDecr}> Decr </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}
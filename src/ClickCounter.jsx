import { useEffect, useState } from "react"


export const ClickCounter = () => {
    const [count, setCount] = useState(0)

useEffect (() => {
    const change = setInterval(() => {
        setCount ((_count) => _count + 1 )
    }, 500 );
    return () => clearInterval(change)
},[])



    return (
        <>
        <h1> The count is : {count}</h1>
        </>
    )
}
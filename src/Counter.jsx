import { useState } from "react"


export const ClickCounter = () => {
    const [count, setCount] = useState(0)

const handleClick = () => {
    setCount((_count) => _count + 1)
}

    return (
        <>

        <h1> The count is : {count}</h1>

        <button onClick={handleClick}> ADD </button>
        </>
    )
}
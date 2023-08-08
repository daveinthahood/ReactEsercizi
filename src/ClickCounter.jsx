import { useEffect, useState } from "react"


export const ClickCounter = ({onCounterChange}) => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        onCounterChange(count)
    },[count])

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
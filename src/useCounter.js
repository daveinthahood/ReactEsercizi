import { useState } from "react"


export const useCounter = (initialValue = 0 ) => {
    const [count, setCount] = useState(initialValue)



    const add = () => {
        setCount((_count) => _count + 1)
    }

    const rem = () => {
        setCount((_count) => _count -1)
    }

    const res = () => {
        setCount(initialValue)
    }

    return {count, add, rem, res}
}
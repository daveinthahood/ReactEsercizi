import { useCallback, useState } from "react"


export const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const handleIncr = useCallback(() => setCount((c) => c+1 ), [])

    const handleDecr = useCallback(() => setCount((c) => c-1 ), [])

    const handleReset = useCallback(() => setCount(initialValue), [])

    return {count, handleDecr, handleIncr, handleReset}
}
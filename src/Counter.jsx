import { useCounter } from "./useCounter"



export const Counter = () => {
    const {count, add, rem, res } = useCounter(0)

    return(
        <>
            <h1> Counter : {count}</h1>
            <button onClick={add}>Add</button>
            <button onClick={rem}> Remove </button>
            <button onClick={res}>Res</button>
        </>
    )
}
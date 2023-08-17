import { useEffect, useRef, useState } from "react"



export const CarDet = ({ initialValue }) => {
   const [data, setData] = useState(true)
   const carRef = useRef()

    const handleSub = (event) => {
        event.preventDefault()
        const modello = carRef.current.element.modello.value;
        const anno = carRef.current.element.anno.value;
        const colore = carRef.current.element.colore.value;
    }

    const handleReset = () =>{
        data.modello ="";
        data.anno =0;
        data.colore ="";
        
    }

    useEffect(() => {
       carRef.current.reset() 
    }, [initialValue])

    return (
        <>
         <h1>cio</h1>

         <form ref={carRef} onSubmit={handleSub} onChange={handleReset}>
            <input type="text" name="modello" placeholder="modello" defaultValue={data.modello} />
            <input type="number" name="anno" placeholder="anno" defaultValue={data.anno}/>
            <input type="text" name="colore"placeholder="colore" defaultValue={data.colore}/>
            <button type="submit"> send </button>
         </form>

        </>
    )
}
import { useState } from "react"


export const LanguageContext = () => {
    const [lang, setLang] = useState("first")

    const handleLang = (event) => {
        setLang(event.target.value)
    }

    return (
        <>
        <h1>lang</h1>


        <select id="Lang" onChange={handleLang}>
                    <option value="default"> Selection </option>
                    <option value="first "> English </option>
                    <option value="second"> Italian </option>
                    <option value="third"> Spanish </option>
                    </select>
        </>
    )
}
// Qui uso l'use Context 

import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function UseContext () {
    const lang = useContext(LanguageContext)
    return (
        <h3> Lang : {lang} </h3>
    )
}
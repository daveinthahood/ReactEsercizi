import { Link, Route, Router, Routes } from "react-router-dom"
import { Counter } from "./Counter"

export const App = () => {
    return(
       <Routes>
        <Route path="/counter" element={<Counter/>}/>
       </Routes>
    )
}
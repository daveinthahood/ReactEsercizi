import { Link, Route, Router, Routes } from "react-router-dom"
import { Counter } from "./Counter"
import { GitHubUsers } from "./GitHubUser"

export const App = () => {
    return(
       <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Router path="users/:username" element={<GitHubUsers/>} />
       </Routes>
    )
}
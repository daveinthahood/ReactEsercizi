import { Link, Route, Router, Routes } from "react-router-dom"
import { Counter } from "./Counter"
import { GitHubUsers } from "./GitHubUser"
import { NotFound } from "./NotFound"
import { GitHubList } from "./List"

export const App = () => {
    return(
        <Router>
            <ul>
                <li>
                    <Link to="/"> Login</Link>
                </li>
                <li>
                    <Link to="/counter"> Counter</Link>
                </li>
                <li>
                    <Link to="/user"> Users</Link>
                </li>
            </ul>
       


       <Routes>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/users/" element={<GitHubUsers/>} />
        
          <Route path="/users/:username" element={<GitHubList/>} />  
         </Routes>
       </Router>
    )
}
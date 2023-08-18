import { useState } from "react"
import { GithubUser } from "./GitHubUsers";


export const GitHubList = () => {
    const [user, setUser] = useState([]);
    const [newValue, setnewValue] = useState()



    handelInput = (e) => {
        setnewValue(e.target.value)
        
    }


    return (
        <>
            <h1> Ciao </h1>
            <input type="text"
                   value={newValue}
                   placeholder="username" 
                   onChange={handleInput}
            />

            <button>  new User </button>


            {user && user.map((username) => (
                <GithubUser key={username} />
            ))}
        </>
    )
}
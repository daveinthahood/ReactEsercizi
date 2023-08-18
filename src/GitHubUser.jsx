import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const GitHubUsers = () => {
    const [data, setData] = useState(null)

   

    useEffect(() => {
        const fetchGitHub = async() =>{
            try {
                const result = await fetch ("https://api.github.com/users")
                const res = await result.json()
                setData(res)
            } catch (error) {
                console.log(error);
            }
        }
        fetchGitHub()
    },[])

    return (
        <>
        
            <h1> { data && data.name}</h1>
           <p> User : { data && data.login} </p>
           <p> Id : {data && data.id}</p>
        </>
    )
}
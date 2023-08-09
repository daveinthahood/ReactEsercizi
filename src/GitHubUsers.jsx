import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const GitHubUsers = () => {
    const [data, setData] = useState([])
    const {username} = useParams()
   


    useEffect(() => {
        const fetchGitHub = async() =>{
            try {
                const result = await fetch ("https://api.github.com/users/${username}")
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
           <p> User : {data && data.name} </p>
           <p> Id : {data.id}</p>
        </>
    )
}
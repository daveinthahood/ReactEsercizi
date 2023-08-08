import { useEffect, useState } from "react"


export const GitHubUsers = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchGitHub = async() =>{
            try {
                const result = await fetch ("https://api.github.com/users/")
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

           <p> User : {data.login} </p>
           <p> Id : {data.id}</p>
        </>
    )
}
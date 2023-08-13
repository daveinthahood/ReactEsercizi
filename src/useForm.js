import { useState } from "react"


const useForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    ;

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    return {
        username,
        password,
        handleUsername,
        handlePass,
    }
}

export default useForm;
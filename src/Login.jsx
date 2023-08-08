import { useState } from "react"


export const Login = () => {
    const [login, setLogin] = useState({
        username : "",
        password: "",
        remember : false
    })

   

    return (
        <>

            <input type="text" 
                    name="username"
                    value={login.username}
                    onChange={handleChange}
            />

            <input type="password" 
                    name="password"
                    value={login.password}
                    onChange={handleChange}
            />

            <input type="checkbox"
                    name="remember"
                    value={login.remember} 
                    onChange={handleChange}
            />
        </>
    )
}
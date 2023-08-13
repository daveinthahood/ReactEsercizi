
import useForm from "./useForm"

export const Login = () => {
    const {username, password, handleUsername, handlePass} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username:", username);
        console.log("password:", password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> USername :</label>
            <input type="text"
                   value={username}
                   placeholder="user" 
                   onChange={handleUsername}
                   />

            <label htmlFor=""> Password:</label>
            <input type="password"
                   value={password}
                   placeholder="pass"
                   onChange={handlePass}
                   />

            <button type="submit"> sub</button>

        </form>


    )
}
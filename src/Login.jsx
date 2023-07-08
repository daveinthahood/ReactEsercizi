const { useState } = require("react")
const { Form } = require("react-router-dom")



const Login = () => {
    const [login, setLogin] = useState({
        username: "",
        password:"",
    })


    const handleInput = (event) => {
        const {name, value} = event.target;
        setLogin((_login) => {
            return {
                ..._login,
                [name]:value,
            }
        })
    }


return (
    <>
        <Form onSubmit={handleSubmit}>
            <input type="text" name="username" value="{login.username}" onInput={handleInput}/>
            <input type="password" name="password" value={login.password} onInput={handleInput}/>
        </Form>
        {login.name === "" || login.password === "" ? (<button disabled={true}> Submit</button>)
        : (<button> Login</button>)        
    
    }
        
    </>
)
}
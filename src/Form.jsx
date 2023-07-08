import { useState } from "react"



const Form = () => {
    const [form, setForm] = useState({
        name:"",
    })

    const handleChange = () => {
        const { name, value} = event.target;
        setForm((_form) => {
            return{
                ..._form,
                [name]:value
            }
        })
    }


}

return (
    <>
        <div>
            <input type="text" name="name" value={form.name} onInput={handleChange}/>
        </div>
    
    </>
)
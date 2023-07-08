import { useState } from 'react'



function App() { //!* prima cosa creo lo state 
  const[form, setForm] = useState({
    name:""
  })

  const handleChange = (event) = {

  }

 

  return (
    <>
    <div>
      <input type="text" name='name' value="form.name" onInput={handleChange}/>
    </div>
  
    </>
  )
}

export default App

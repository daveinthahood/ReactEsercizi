import { useState } from "react"



const ToDoList = () => {
  const [items, setItems] = useState()
  

  const addItem= () => {
    const newItems = document.querySelector("#input").value
    setItems([...items, newItems])
  }

  return (
    <>
    <div>
      <ul>
        <li> {items}</li>
      </ul>
      <input type="text" id="input"/>
      <button onClick={addItem}> Add</button>
    </div>
    </>
  )
}

export default ToDoList;

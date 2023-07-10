import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Age } from './age'

const App =()=> {
  
  return (
    <>
      <h1> Welcome Davide your age is {this.props.age}</h1>
      {
        this.props.age > 18 ? <p> your age is {this.props.age} </p> : ""
      }
    </>
  )
}

export default App

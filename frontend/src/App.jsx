import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import {axios} from axios;

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/todos")
    .then
  },[])
  return (
    <div>
      <CreateTodo></CreateTodo>
      
     <Todos todos = {[
      {
        title : "afhuah",
        description : "fgyhavbf",
        completed : false
      }
     ]}> </Todos> 
      
    </div>
  )
}

export default App

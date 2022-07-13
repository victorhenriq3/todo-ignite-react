import React, { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'
import './global.css'

export interface Todo {
  content: string
  check: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(e: React.ChangeEvent<HTMLInputElement>){
    setNewTodo(e.target.value)
  } 

  function checkTodo(todo: Todo) {
    const findTodo = todos.map(td => td.content === todo.content ? {...todo, check: !todo.check} : td)

    setTodos(findTodo)
  }

  function removeTodo(todo: Todo){
    const findTodo = todos.filter(td => td.content !== todo.content)

    setTodos(findTodo)
  }

  function addTodo(){

    const newState = {
      content: newTodo,
      check: false
    }

    setTodos([...todos, newState])

    setNewTodo('')
  }

  return (
    <div className="App">
      <Header />

      <Input handleChange={handleNewTodo} onAddTodo={addTodo} newTodo={newTodo}/>

      <div className='todoList'>
        <TodoList todos={todos} checkTodo={checkTodo} removeTodo={removeTodo}/>
      </div>
    </div>
  )
}

export default App

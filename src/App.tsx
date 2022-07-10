import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'
import './global.css'

function App() {

  return (
    <div className="App">
      <Header />

      <Input />

      <TodoList />
    </div>
  )
}

export default App

import { useState } from 'react'
import TodoCreate from '../src/components/TodoCreate'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodo = todos.map(todo => {
      if (todo.id !== newTodo.id) {
        return todo
      }
      return newTodo
    })
    setTodos([...updatedTodo])
  }

  return (
    <div className='App'>
      <div className='app-container'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App

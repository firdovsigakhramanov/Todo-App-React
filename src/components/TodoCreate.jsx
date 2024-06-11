import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState('')

    const clear = () => {
        setNewTodo("")
    }
    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: crypto.randomUUID(),
            content: newTodo
        }
        onCreateTodo(request)
        clear()
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} className='todo-input' type="text" placeholder='Todo daxil edin...' />
            <button onClick={createTodo} className='create-btn btn'>Create Todo</button>
        </div>
    )
}

export default TodoCreate
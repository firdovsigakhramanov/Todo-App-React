import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)
    const removeTodo = () => {
        onRemoveTodo(id)
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }
    return (
        <>
            <div className='todo-list'>
                <p className='todo-content'>
                    {
                        editable ? <input type="text" className='edit-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : content
                    }
                </p>
                <div className='todo-functions'>
                    <FaTrash onClick={removeTodo} />
                    {
                        editable ? <FaCheck onClick={updateTodo} /> : <FaEdit onClick={() => setEditable(true)} />
                    }
                </div>
            </div>
        </>

    )
}

export default Todo
import React, { useEffect, useState } from 'react'
import { useTodoContext } from '../context/Todo';

function TodoForm() {
    const { addTodo, updateTodo, editTodoId, editTodo, todos } = useTodoContext()
    const [text, setText] = useState('');
    
    useEffect(() => {
        if(!!editTodoId) {
            setText(getTodoText(editTodoId))
        }
    }, [editTodoId])

    function getTodoText(id) {
        return todos.find(todo => todo.id === id).text;
    }

    function todoSubmit(e) {
        e.preventDefault();

        if(!!editTodoId) {
            updateTodo(text)
            editTodo(null)
        }
        else
            addTodo(text)
        setText('');
    }

    function getButtonText() {
        if(!!editTodoId) return "Edit todo"
        return "Add todo"
    }

    return (
        <form onSubmit={todoSubmit} className="flex gap-2">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a new todo..." className="border rounded px-3 py-2 flex-grow shadow"></input>
            <button type="submit" className="w-20 rounded bg-blue-400 text-white font-semibold flex-grow-0 flex-shrink-0 hover:bg-blue-500 shadow">{getButtonText()}</button>
        </form>
    )
}

export default TodoForm

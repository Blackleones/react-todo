import React, { useContext } from 'react'
import { FaCheck, FaTrash, FaEdit, FaTimes } from 'react-icons/fa';
import { TodoContext } from '../context/Todo';
import classNames from 'classnames';

function Todo({ todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext)
    
    const checkClassNames = classNames({
        "text-green-500 hover:text-green-200": todo.completed,
        "text-gray-200 hover:text-green-500": !todo.completed
    })

    const todoClassNames = classNames({
        'flex justify-between items-center bg-white p-3 rounded shadow-sm mb-2': true,
        "bg-gradient-to-r from-green-500 to-green-300": todo.completed,
        "text-white": todo.completed,
        "text-gray-200": !todo.completed
    })

    const textClassNames = classNames({
        "font-semibold": true,
        "text-black": !todo.completed
    })

    return (
        <div className={todoClassNames}>
            <p className={textClassNames}>{todo.text}</p>
            <div className="flex gap-4">
                {todo.completed && <FaTimes className="hover:text-red-500" onClick={() => toggleTodo(todo.id)}/>}
                {!todo.completed && <FaCheck className={checkClassNames} onClick={() => toggleTodo(todo.id)}/>}
                <FaEdit className="hover:text-blue-500" onClick={() => editTodo(todo.id)}/>
                <FaTrash className="hover:text-red-500" onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    )
}

export default Todo

import React, { useContext } from 'react'
import { TodoContext } from '../context/Todo'
import Todo from './Todo'

export const TodoList = () => {
    const { todos } = useContext(TodoContext)
  
    return (
        <div className="m-3">
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

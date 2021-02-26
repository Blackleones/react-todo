import React from 'react'
import { useTodoContext } from '../context/Todo'
import Todo from './Todo'

export const TodoList = () => {
    const { todos } = useTodoContext()
  
    return (
        <div className="m-3">
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

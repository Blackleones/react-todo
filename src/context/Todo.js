import React, { useReducer } from 'react'
import todoReducer, { TODO_ACTION } from './todoReducer'

//initial state
const initialState = {
    todos: [],
    editTodoId: null
}

//create context
export const TodoContext = React.createContext(initialState)

//create context provider
/*
    è un componente reactjs che prende in ingresso dei figli (i componenti da renderizzare) e
    li decora con le con il provider del contesto
*/
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    
    function addTodo(text) {
        dispatch({ type: TODO_ACTION.ADD_TODO, payload: {text: text}})
    }
    
    function updateTodo(text) {
        dispatch({ type: TODO_ACTION.UPDATE_TODO, payload: {text: text}})
    }
    
    function toggleTodo(id) {
        dispatch({ type: TODO_ACTION.TOGGLE_TODO, payload: {id: id}})
    }

    function deleteTodo(id) {
        dispatch({type: TODO_ACTION.DELETE_TODO, payload: {id: id}})
    }

    function editTodo(id) {
        dispatch({type: TODO_ACTION.EDIT_TODO, payload: {id: id}})
    }

    //value è l'oggetto passato ai figli quando richiedono il contesto
    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            editTodoId: state.editTodoId,
            addTodo,
            updateTodo,
            toggleTodo,
            deleteTodo,
            editTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


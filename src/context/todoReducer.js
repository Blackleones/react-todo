
export const TODO_ACTION = {
    ADD_TODO : 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
    UPDATE_TODO: 'update-todo',
    EDIT_TODO: 'edit-todo'
}

function newTodo(text) {
    return { id: Date.now(), text: text, completed: false }
}

export default function todoReducer(state, action) {
    switch(action.type) {
        case TODO_ACTION.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, newTodo(action.payload.text)]
          }
        case TODO_ACTION.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case TODO_ACTION.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id 
                    ? {...todo, completed: !todo.completed}
                    : todo)
          }
        case TODO_ACTION.UPDATE_TODO: 
          return {
              ...state,
              todos: state.todos.map(todo => todo.id !== state.editTodoId 
                ? todo 
                : {...todo, text: action.payload.text})
          }
        case TODO_ACTION.EDIT_TODO: 
          return {
              ...state,
              editTodoId: action.payload.id
          }
        default:
        return state
    }
}


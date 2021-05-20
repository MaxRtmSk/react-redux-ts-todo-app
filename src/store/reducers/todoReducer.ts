import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  let newTodos = [];
  switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        newTodos = [...state.todos]
        newTodos.push(action.payload)
        return {todos: newTodos, error: null}
      case TodoActionTypes.DELETE_TODO:
        newTodos = [...state.todos]
        newTodos = newTodos.filter((todo)=>todo.id !== action.payload)
        return {todos: newTodos, error: null}
      case TodoActionTypes.UPDATE_TODO:
        newTodos = [...state.todos]
        let todoIndex = newTodos.findIndex(todo => todo.id === action.payload.id)
        newTodos[todoIndex].title =  action.payload.title
        return {todos: newTodos, error: null}
      default: 
        return state;
  }
}
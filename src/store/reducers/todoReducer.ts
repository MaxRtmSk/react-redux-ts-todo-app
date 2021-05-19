import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  let newTodos = [];
  switch (action.type) {
    // case 'ADD_TODO':
    //   newTodos = {[...state]};
    //   newTodos.todos.push(action.payload);
    //   return {error: null}
    // case 'DELETE_TODO':
    //   newTodos = [...state];
    //   newTodos = newTodos.filter((todo) => {
    //     return todo.id != action.payload;
    //   });
    //   return newTodos;
    // case 'UPDATE_TODO':
    //   newTodos = [...state];
    //   let index = -1;
    //   for (let i = 0; i < newTodos.length; i++) {
    //     index++;
    //     if (newTodos[i].id == action.payload.id) {
    //       break;
    //     }
    //   }
    //   if (index != -1) {
    //     newTodos[index] = action.payload
    //     return newTodos
    //   }
      case TodoActionTypes.ADD_TODO:
      return {todos: [], error: null}
      case TodoActionTypes.DELETE_TODO:
      return {todos: [], error: null}
      case TodoActionTypes.UPDATE_TODO:
      return {todos: [], error: null}
  }
  return state;
}
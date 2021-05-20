import { AddTodosActions, DeleteTodosActions, ITodo, TodoActionTypes, UpdateTodosActions } from "../../types/todo";

export function addTodo(todo: ITodo): AddTodosActions {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId: string): DeleteTodosActions {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo: ITodo): UpdateTodosActions {
  return {
    type: TodoActionTypes.UPDATE_TODO,
    payload: todo,
  };
}
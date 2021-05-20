import { AddTodosActions, DeleteTodosActions, ITodoItem, TodoActionTypes, UpdateTodosActions } from "../../types/todo";

export function addTodo(todo: ITodoItem): AddTodosActions {
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

export function updateTodo(todo: ITodoItem): UpdateTodosActions {
  return {
    type: TodoActionTypes.UPDATE_TODO,
    payload: todo,
  };
}
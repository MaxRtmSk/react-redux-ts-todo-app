export interface ITodo {
  id: string,
  title: string
}

export interface TodoState {
  todos: ITodo[];
  error: null | string;
}

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO'
}

export interface AddTodosActions {
  type: TodoActionTypes.ADD_TODO;
  payload: ITodo
}

export interface DeleteTodosActions {
  type: TodoActionTypes.DELETE_TODO;
  payload: string
}

export interface UpdateTodosActions {
  type: TodoActionTypes.UPDATE_TODO;
  payload: ITodo
}

export type TodoAction = AddTodosActions | DeleteTodosActions | UpdateTodosActions

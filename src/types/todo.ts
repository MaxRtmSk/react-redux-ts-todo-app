export interface TodoState {
  todos: [];
  error: null | string;
}

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO'
}

interface AddTodosActions {
  type: TodoActionTypes.ADD_TODO;
  payload: any[]
}

interface DeleteTodosActions {
  type: TodoActionTypes.DELETE_TODO;
}

interface UpdateTodosActions {
  type: TodoActionTypes.UPDATE_TODO;
}

export type TodoAction = AddTodosActions | DeleteTodosActions | UpdateTodosActions

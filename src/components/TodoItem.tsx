import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/action-creators/todo';
import { ITodo } from '../types/todo';

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [editable, setEditable] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(todo.title)

  const dispatch = useDispatch()

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const buttonEdit = () => {
    dispatch(updateTodo({
      ...todo,
      title
    }))
    setEditable(!editable)
  }

  const buttonDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div>
      {editable ? <input type="text" value={title} onChange={changeTitle} /> : <h4>{todo.title}</h4>}
      <button onClick={buttonEdit}>{editable ? "Update" : "Edit"}</button>
      <button onClick={buttonDelete}>Delete</button>
    </div>
  )
}

export default TodoItem;
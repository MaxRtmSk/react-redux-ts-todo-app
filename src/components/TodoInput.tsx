import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from "uuid";
import { addTodo } from '../store/action-creators/todo';

const TodoInput: FC = () => {
  const [title, setTitle] = useState<string>('')
  const dispatch = useDispatch()


  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const buttonAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addTodo({
      id: uuid(),
      title,
    }))
    setTitle('')
  }

  return (
    <div>
      <input value={title} type="text" onChange={changeTitle} />
      <button onClick={buttonAdd}>Add</button>
    </div>
  )
}

export default TodoInput;
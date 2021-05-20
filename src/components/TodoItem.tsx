import React, { FC } from 'react';
import { ITodo } from '../types/todo';

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, title } = todo
  return (
    <div>
      <span>{title}</span>
    </div>
  )

}

export default TodoItem;
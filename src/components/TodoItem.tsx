import React, { FC } from 'react';
import { ITodoItem } from '../types/todo';

interface TodoItemProps {
  todo: ITodoItem
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
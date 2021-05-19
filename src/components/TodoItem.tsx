import React, { FC } from 'react';
import { ITodoItem } from '../types/types';

interface TodoItemProps {
  todo: ITodoItem
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

  return (
    <div>TodoItem</div>

  )

}

export default TodoItem;
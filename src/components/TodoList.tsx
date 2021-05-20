import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSeletor } from '../hooks/useTypedSelector';
import TodoItem from './TodoItem';



const TodoList: FC = () => {
  // const state = useSelector(state => state.todos)
  const { todos } = useTypedSeletor(state => state.todo)

  return (
    <div>
      {todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  )

}

export default TodoList;
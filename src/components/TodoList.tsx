import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSeletor } from '../hooks/useTypedSelector';



const TodoList: FC = () => {
  // const state = useSelector(state => state.todos)
  const { todos } = useTypedSeletor(state => state.todo)

  return (
    <div>
      TodoList
    </div>
  )

}

export default TodoList;
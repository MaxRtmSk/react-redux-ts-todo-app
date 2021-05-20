import React, { FC } from 'react';
import './App.css';
import List from './components/List';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { useTypedSeletor } from './hooks/useTypedSelector';
import { ITodo } from './types/todo';

export const App: FC = () => {
  const { todos } = useTypedSeletor(state => state.todo)

  return (
    <div className="App">
      <TodoInput />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
}


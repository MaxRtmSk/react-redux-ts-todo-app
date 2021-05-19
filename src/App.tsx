import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export const App: React.FC = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}


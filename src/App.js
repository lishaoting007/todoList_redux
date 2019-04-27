import React from 'react';
import './App.css';
// import Count from './components/Count';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoFooter from './components/TodoFooter';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </div>
  );
}

export default App;

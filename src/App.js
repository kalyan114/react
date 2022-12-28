import React, { component } from 'react';
import logo from './logo.svg';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './EventBind';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
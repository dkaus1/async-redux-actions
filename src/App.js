import React from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';

function App() {
  const counter = useSelector(state => state.counter.counter);
  console.log("counter", counter);
  const dispatch  = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch(actioncreators.increment())}>Increment</button>
       <button onClick={()=> dispatch(actioncreators.decrement())}>Decrement</button>     
      </header>
    </div>
  );
}

export default App;

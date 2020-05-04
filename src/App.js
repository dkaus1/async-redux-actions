import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';


function App() {
  const state = useSelector(state => ({
    thunkInfo: state.thunk
  }));
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(actioncreators.fetchUsers());
  }, [dispatch])

  const ListItems =  state.thunkInfo.data.map(user => 
     <li key={user.id}>{user.name} - {user.phone}</li>
  )
  return (
    <div className="App">
      <h3> Redux Async Action </h3>
      <header className="App-header">
       {state.thunkInfo.loading && <span>Loading users...</span>}
       {
       <ul>
        {!state.thunkInfo.loading &&  ListItems}
        </ul>
      } 
      </header>
      <div>
     
      
      </div>
    </div>
  );
}

export default App;

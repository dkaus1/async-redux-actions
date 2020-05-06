import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';


function App() {
  const state = useSelector(state => ({
    obInfo: state.ob
  }));
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(actioncreators.observableFetchUserRequest())
  }, [dispatch])

  const ListItems =  (state.obInfo.data || []).map(user => 
     <li key={user.id}>{user.name} - {user.phone}</li>
  )
  return (
    <div className="App">
      <h3> Redux Async Action </h3>
      <header className="App-header">
       {state.obInfo.loading && <span>Loading users...</span>}
       {
       <ul>
        {!state.obInfo.loading &&  ListItems}
        </ul>
      } 
      </header>
      <div>
     
      
      </div>
    </div>
  );
}

export default App;
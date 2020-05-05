import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';


function App() {
  const state = useSelector(state => ({
    sagaInfo: state.saga
  }));
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(actioncreators.sagaFetchUserRequest())
  }, [dispatch])

  const ListItems =  (state.sagaInfo.data || []).map(user => 
     <li key={user.id}>{user.name} - {user.phone}</li>
  )
  return (
    <div className="App">
      <h3> Redux Async Action </h3>
      <header className="App-header">
       {state.sagaInfo.loading && <span>Loading users...</span>}
       {
       <ul>
        {!state.sagaInfo.loading &&  ListItems}
        </ul>
      } 
      </header>
      <div>
     
      
      </div>
    </div>
  );
}

export default App;
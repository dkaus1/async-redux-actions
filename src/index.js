import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer  from  './reducers';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
                rootReducer,
                compose(
                  applyMiddleware(epicMiddleware),
              window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            )
                );

                epicMiddleware.run(rootEpic);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todo from './reducers';
import {addTodo, setVisibilityFilter, toggleTodo} from './actions'

let store = createStore(todo);

console.log(store.getState())
store.dispatch(addTodo('Hello React!'))
store.dispatch(setVisibilityFilter('SHOW_ACTIVE'))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

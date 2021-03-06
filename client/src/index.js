import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Header_Weather from './Components/Header_Weather';
// import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

// // Adding redux and reducers 
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import rootReducer from './reducers'

// // Creates our store to use our reducers and the chrome extension to debug the redux store
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
import store from './reducers/store'


ReactDOM.render(
  <Provider store={store}>
    {/* <Header_Weather /> */}
    {/* <Header /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

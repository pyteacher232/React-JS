import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NextPage from './components/NextPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={App} />
        <Route path="/next" component={NextPage} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

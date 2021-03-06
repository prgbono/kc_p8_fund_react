import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import storage from './utils/storage.js';
import { setAuthorizationHeader } from './api/axiosClient.js';

const accessToken = storage.get(`${process.env.REACT_APP_TOKEN_LS}`);
if (accessToken) setAuthorizationHeader(accessToken);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App isAlreadyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

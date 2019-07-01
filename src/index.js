import React from 'react';
import ReactDOM from 'react-dom';
import './test.css';

import App from './App';
import App2 from './App2';
import Test from './test';
import Clock from './state';
import ApiEx from './LifeCycle';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<ApiEx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

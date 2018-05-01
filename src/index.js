import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



// Renders React component called 'App' into a root DOM node:
// (component names start with upper case)
render(<App />, document.getElementById('root'));


registerServiceWorker();

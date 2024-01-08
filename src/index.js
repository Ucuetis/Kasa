import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


/**
 * The line `const root = ReactDOM.createRoot(document.getElementById('root'));` is creating a root for the React application. 
 * It uses the `createRoot` method from the `ReactDOM` library to create a new root instance. 
 * The `document.getElementById('root')` part is selecting the HTML element with the id 'root' where the React application will be rendered. 
 * The created root instance is then stored in the `root` constant.
 * 
 * @constant
 * @name root
 * @kind variable
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

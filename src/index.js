import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the Main App Component
import './index.css'; // Importing the Main CSS file (if you have one)
import reportWebVitals from './reportWebVitals'; // Optional: For measuring performance

// Rendering the App Component to the 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();

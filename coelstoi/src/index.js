import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './COMPONENTES/REGISTRO';
import reportWebVitals from './JS/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
  path: "/",
  Element: <App />,
  }
]);

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

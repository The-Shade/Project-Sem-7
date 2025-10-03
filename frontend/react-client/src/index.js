import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import LoginForm from "./Components/login-form/login-form";
import reportWebVitals from './reportWebVitals';

const root_div = document.getElementById('root');
root_div.onload = () => {
    const images = ["../backgrounds/aesthetic-star-laptop-pwjnt83gyxs1evhq.jpg", ];

    root_div.style.backgroundImage = `url(${images[0]})`;

    let i=1;
    setInterval(() => {
        root_div.style.backgroundImage = `url(${images[0]})`;
        if (i === images.length) i=0;
    }, 1000);
};

const root = ReactDOM.createRoot(root_div);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <LoginForm />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

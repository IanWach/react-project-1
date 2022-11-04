import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Script from './Script';
import Welcome from './Sample';
import Comment from './Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
const comment = {
  date: new Date(),
  text: 'I hope you get to read the Blog Post Comment',
  author: {
      name: 'Ian',
      avatarUrl: '/project-1/public/logo512.png'
  }
};
root.render(
  <React.StrictMode>
    <Form />
    <Script />
    <Welcome name ='Ianno'/>
    <Comment 
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import Script from './components/Script';
import Welcome from './components/Sample';
import Comment from './components/Comment';
import Slide from './components/Effect';
import Hello from './components/Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = ReactDOM.createRoot(document.getElementById('items'));
const comment = {
  date: new Date(),
  text: 'I hope you get to read the Blog Post Comment',
  author: {
      name: 'Ian',
      avatarUrl: '/logo512.png',
  }
};

root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
)
items.render(
  <React.StrictMode>
    <Script />
    <Welcome name ='Ian IT Tech'/>
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} 
    />
    <Slide />
    <Hello />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

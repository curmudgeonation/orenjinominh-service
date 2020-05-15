import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.jsx';

const getId = () => {
  let url = window.location.href;
  if (url[url.length - 1] === '/') {
    var id = '0001';
  } else {
    var id = url.slice(-4);
  }
  return id;

};

ReactDom.render(<App id={getId()}/>, document.getElementById('sim-props'));
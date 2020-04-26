import React from 'react';
import ReactDom from 'react-dom';

import Arrows from './Arrows.jsx';
import Dots from './Dots.jsx';
import Favorite from './Favorite.jsx';

const properties = (props) => (
  <div className = "similar-properties">
    <h3>This component loads similar properties on a carousel</h3>
    <Arrows />
    <div> Property's photos go here.</div>
    <Dots />
    <Favorite />
    <Arrows />
  </div>
);
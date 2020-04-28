import React from 'react';
import ReactDom from 'react-dom';

import Arrows from './Arrows.jsx';
import Property from './Property.jsx';

const Properties = (props) => (
  <div className = "similar-properties">
    <h3>This component loads similar properties on a carousel</h3>
    <Property />
    <Arrows />
  </div>

);

export default Properties;
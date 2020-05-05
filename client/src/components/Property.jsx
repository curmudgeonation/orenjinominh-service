import React from 'react';
import ReactDom from 'react-dom';

import Assets from './Assets.jsx';


const Property = (props) => {
  console.log(props);
  console.log([props.property[0]]);

  // let details = Object.values(props.property[0]);

  // console.log(Object.values(props.property[0]));

  return (
  <div>listing</div>
  );
}



export default Property;
import React from 'react';
import ReactDom from 'react-dom';

import Assets from './Assets.jsx';


const Property = (props) => {

  return (
    <div id='property-details'>
      <div id="assets-carousel"><Assets assets ={props.property.assets}/></div>
      <div>{props.property.location}</div>
      <div>{props.property.stars}</div>
      <div>{props.property.typeOfRoom}</div>
  <div>{props.property.totalBeds} {props.property.totalBeds === 1 ? 'bed' : 'beds'} </div>
      <div>{props.property.headline}</div>
      <div> <b> ${props.property.pricing}</b> / night</div>
    </div>
  );
}



export default Property;
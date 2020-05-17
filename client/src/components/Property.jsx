import React from 'react';
import ReactDom from 'react-dom';

import Assets from './Assets.jsx';

import {Image, Details, SleepArrangement, Star} from './styledComponents.jsx';

const Property = (props) => {

  return (
    <div id='property-details'>
      <div id="assets-carousel"><Assets assets ={props.property.assets}/></div>
      <Details>

        <SleepArrangement>
          {props.property.typeOfRoom + ' · '}
          {props.property.totalBeds} {props.property.totalBeds === 1 ? 'bed' : 'beds'}
        </SleepArrangement>
  <Star> {<img src='https://host-service.s3-us-west-1.amazonaws.com/star-xsm.png'/>} {props.property.stars} {props.property.reviews} </Star>
      <br></br>
      <div>{props.property.headline}</div>
      <div> <b> ${props.property.price}</b> / night</div>
      <div>{props.property.reviews}</div>
      </Details>

    </div>
  );
}



export default Property;
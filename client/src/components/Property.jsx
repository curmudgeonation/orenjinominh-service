import React from 'react';
import ReactDom from 'react-dom';

import Assets from './Assets.jsx';


// state passed down is one JSON object from db
const Property = (props) => (
  <div className = "property">
    <h3>This component renders a property's photos and its listing details.</h3>
    <Assets />
    <div> listing details get passed as props here: location, typeOfRoom, totalBeds, headline, pricing, rating, reviews.
    </div>
  </div>
);

export default Property;
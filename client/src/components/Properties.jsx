import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Property from './Property.jsx';


import {BorderlessButton} from './styledComponents.jsx';


const Properties = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<BorderlessButton>{'<'}</BorderlessButton>}
        rightChevron={<BorderlessButton>{'>'}</BorderlessButton>}
        outsideChevron
        chevronWidth={chevronWidth}
      >

       {props.properties.map(property => {
        return (
          <div style={{ height: 400 }}>
          <Property property={property}/>
          </div>)
        })}

      </ItemsCarousel>
    </div>
  );
};

export default Properties;
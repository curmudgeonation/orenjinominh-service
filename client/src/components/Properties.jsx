import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Property from './Property.jsx';

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
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
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
// import React from 'react';
// import ReactDom from 'react-dom';

// import Arrows from './Arrows.jsx';
// import Property from './Property.jsx';

// const Properties = (props) => (
//   <div className = "similar-properties">
//     <h3>This component loads similar properties on a carousel</h3>
//     {/* <Property />
//     <Arrows /> */}


// );

// export default Properties;

import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
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
        <div style={{ height: 400 }}>1st card</div>
        <div style={{ height: 400 }}>2nd card</div>
        <div style={{ height: 400 }}>3rd card</div>
        <div style={{ height: 400 }}>4th card</div>
        <div style={{ height: 400 }}>5th card</div>
        <div style={{ height: 400 }}>6th card</div>
        <div style={{ height: 400 }}>7th card</div>
        <div style={{ height: 400 }}>8th card</div>
        <div style={{ height: 400 }}>9th card</div>
        <div style={{ height: 400 }}>10th card</div>
        <div style={{ height: 400 }}>11th card</div>
        <div style={{ height: 400 }}>12th card</div>
      </ItemsCarousel>
    </div>
  );
};
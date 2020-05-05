import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

// import Arrows from './Arrows.jsx';
// import Dots from './Dots.jsx';
// import Favorite from './Favorite.jsx';

const Assets = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  console.log(props.assets);
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={10}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >

       {props.assets.map(asset => {
        return (
          <div style={{ height: 100 }}>
          <img src={asset}></img>
          </div>)
        })}

      </ItemsCarousel>
    </div>
  );
};

export default Assets;
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import {Image} from './styledComponents.jsx';

// import Arrows from './Arrows.jsx';
// import Dots from './Dots.jsx';
// import Favorite from './Favorite.jsx';

const Assets = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        chevronWidth={chevronWidth}
      >

       {props.assets.map(asset => {
        return (
          <div style={{ height: 200 }}>
          <Image src={asset} />
          </div>)
        })}

      </ItemsCarousel>
    </div>
  );
};

export default Assets;
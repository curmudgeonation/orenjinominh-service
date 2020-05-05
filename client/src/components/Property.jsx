import React from 'react';
import ReactDom from 'react-dom';

import Assets from './Assets.jsx';


const Property = (props) => {
  console.log(props.property[0]);


  // console.log(Object.values(props.property[0]));

  return (
  <div>listing</div>
  );
}


// class Property extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   ComponentDidMount() {
//     props = props.property[0];
//   }

//   render() {
//     return (
//     <div> {props}
//       </div>
//     );
//   }
// }



export default Property;
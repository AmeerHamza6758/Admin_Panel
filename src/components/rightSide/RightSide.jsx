import React from 'react';
import "./RightSide.css";
import Updates from '../updates/Updates';
import CustomerReview from '../customer/CustomerReview';
const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
      <h2>Updates</h2>
      <Updates/>
    </div>
    <h3>Customer Review</h3>
    <CustomerReview/>
    </div>
  );
}

export default RightSide;

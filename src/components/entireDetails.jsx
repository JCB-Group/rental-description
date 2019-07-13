import React from 'react';
import style from './entireDetails.css';

const EntireDetails = (props) => (
  <div>
    <div className={style.entireTitle}>Entire Apartment</div>
      <div className={style.entireDetails}>
        <div>{props.RentalData.rentalData.entireRental.numOfGuest} guests <span>&#183;</span></div>
        <div>{props.RentalData.rentalData.entireRental.numOfBedroom} bedroom <span>&#183;</span></div>
        <div>{props.RentalData.rentalData.entireRental.numOfBeds} beds <span>&#183;</span></div>
        <div>{props.RentalData.rentalData.entireRental.numOfBathroom} baths</div>
      </div>
  </div>
);

export default EntireDetails;

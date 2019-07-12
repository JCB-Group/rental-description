import React from 'react';
import style from './ReadMore.css';

const ReadMore = props => (
  <div> 
    <div className={style.readMoreSubSectionTitles}>The Space</div>
    <div>{props.RentalData.rentalData.writtenDescription.theSpace}</div>
    <div className={style.readMoreSubSectionTitles}>Guest Access</div>
    <div>{props.RentalData.rentalData.writtenDescription.guestAccess}</div>
    <div className={style.readMoreSubSectionTitles}>Interaction with guests</div>
    <div>{props.RentalData.rentalData.writtenDescription.interactionWithGuest}</div>
    <div className={style.readMoreSubSectionTitles}>Other things to note</div>
    <div>{props.RentalData.rentalData.writtenDescription.otherThingsToNote}</div>
  </div>
);

export default ReadMore;

import React from 'react';
import style from './DescriptionMainHeader.css';

const DescriptionMainHeader = props => (
  <div>
    <h1>{props.RentalData.rentalData.detailHead.title}</h1>
    <div className={style.detailHeadCityAndPhoto}>
      <div>{props.RentalData.rentalData.detailHead.city}</div>
      <img src ={props.RentalData.rentalData.detailHead.photoUrl} alt="host photo" height="42" />
    </div>
  </div>


);

export default DescriptionMainHeader;

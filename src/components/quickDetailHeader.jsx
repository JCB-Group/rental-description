import React from 'react';
import style from './quickDetailHeader.css';


const quickDetailHeader = (props) => {
  let superHost = null;

  if (props.RentalData.rentalData.hostInfo.superhost) {
    superHost = (
      <div>
        <div className={style.title}> {props.RentalData.rentalData.hostInfo.name} is a superHost</div>
        <div className={style.info}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
      </div>
    );
  }
  return (
    <div>
      <div>Hello from quickDetailHeader {props.RentalData.rentalData.entireRental.numOfGuest}</div>
      <div>{superHost}</div>
    </div>
  );
};

export default quickDetailHeader;

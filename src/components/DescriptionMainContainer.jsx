import React from 'react';
import style from './DescriptionMainContainer.css'


const DescriptionMainContainer = (props) => {

  return ( 
    <div className={style.mainContainer}>
      <h1>title</h1>
      <div className={style.entireContainer}>
        <div className={style.entireTitle}>Entire Apartment</div>
        <div className={style.entireDetails}>
          <div>{props.RentalData[0].entireRental.numOfGuest} guests <span>&#183;</span> </div>
          <div>{props.RentalData[0].entireRental.numOfBedroom} bedroom <span>&#183;</span> </div>
          <div>{props.RentalData[0].entireRental.numOfBeds} beds <span>&#183;</span> </div>
          <div>{props.RentalData[0].entireRental.numOfBathroom} baths</div>
        </div>
      </div>

      <div>{props.RentalData[0].hostInfo.name} is a superhost </div>

      <div>self check in: {props.RentalData[0].quickDetail.selfCheckin_lockBox}</div>
      <div>sparkeling clean votes: {props.RentalData[0].quickDetail.recentSparklingCleanVotes}</div>
      <hr/>
  
      <div className={style.writeUp}>short write up: {props.RentalData[0].quickDetail.writtenDescription.brief}</div>
      
  
      <div className={style.readMore}>Read more about the space </div>
      <div className={style.readMore}>Contact host </div>
      <hr/>
      <div className={style.Amenities}>Amenities </div>
      <div className={style.readMore}>Show all 35 amenities </div>
      <hr/>
    </div>
  )
  
}

export default DescriptionMainContainer;
import React from 'react';
import style from './DescriptionMainContainer.css'

const DescriptionMainContainer = (props) => {

  let toShow = "loading........."

  if(Object.keys(props.RentalData).length > 0){
    toShow = 
    <div className={style.mainContainer}>
      <h1>title</h1>
      <div className={style.entireContainer}>
        <div className={style.entireTitle}>Entire Apartment</div>
        <div className={style.entireDetails}>
          <div>{props.RentalData.rentalData.entireRental.numOfGuest} guests <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBedroom} bedroom <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBeds} beds <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBathroom} baths</div>  
        </div>
      </div>

      <div>{props.RentalData.rentalData.hostInfo.name} is a superhost </div>
      <div>self check in: {props.RentalData.rentalData.quickDetail.selfCheckin_lockBox}</div>
      <div>sparkeling clean votes: {props.RentalData.rentalData.quickDetail.recentSparklingCleanVotes}</div>
      <hr/>
      <div>short write up: {props.RentalData.rentalData.quickDetail.writtenDescription.brief}</div>
      
  
      <div className={style.readMore}>Read more about the space </div>
      <div className={style.readMore}>Contact host </div>
      <hr/>
      <div className={style.Amenities}>Amenities </div>
      <div className={style.readMore}>Show all 35 amenities </div>
      <hr/>
    </div>
  }

  return ( 
    <div> {toShow} </div>
  )
}

export default DescriptionMainContainer;
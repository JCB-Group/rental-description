import React from 'react';
import style from './DescriptionMainContainer.css'

const DescriptionMainContainer = (props) => {

  let toShow = "loading........."

  if(Object.keys(props.RentalData).length > 0){
    toShow = 
    <div>
      <div>title</div>
      <div>
        <div>Entire Apartment</div>
        <div>{props.RentalData.rentalData.entireRental.numOfGuest} guests</div>
        <div>{props.RentalData.rentalData.entireRental.numOfBedroom} bedroom</div>
        <div>{props.RentalData.rentalData.entireRental.numOfBeds} beds</div>
        <div>{props.RentalData.rentalData.entireRental.numOfBathroom} baths</div>    
      </div>

      <div>{props.RentalData.rentalData.hostInfo.name} is a superhost </div>
      <div>self check in: {props.RentalData.rentalData.quickDetail.selfCheckin_lockBox}</div>
      <div>sparkeling clean votes: {props.RentalData.rentalData.quickDetail.recentSparklingCleanVotes}</div>
      <div>short write up: {props.RentalData.rentalData.quickDetail.writtenDescription.brief}</div>
      
  
      <div className={style.readMore}>Read more about the space </div>
      <div className='style.readMore'>Contact host </div>
      <div>Amenities </div>
      <div className='style.readMore'>Show all 35 amenities </div>
    </div>
  }

  return ( 
    <div> {toShow} </div>
  )
}

export default DescriptionMainContainer;
import React from 'react';
import './DescriptionMainContainer.css'

const DescriptionMainContainer = (props) => {
  // console.log(props.RentalData.typeof())

  let version = "goodbye"

  if (props.RentalData === "hello"){
     version = "hello"
  } 

  // console.log(props.RentalData[0].entireRental)
  //this is a test


  return ( 
   
  
    <div>
      <div>title</div>
      <div>
        <div>Entire Apartment</div>
        <div>{props.RentalData[0].entireRental.numOfGuest} guests</div>
        <div>{props.RentalData[0].entireRental.numOfBedroom} bedroom</div>
        <div>{props.RentalData[0].entireRental.numOfBeds} beds</div>
        <div>{props.RentalData[0].entireRental.numOfBathroom} baths</div>
      </div>

      <div>{version}</div>
      <div>{props.RentalData[0].hostInfo.name} is a superhost </div>

      <div>self check in: {props.RentalData[0].quickDetail.selfCheckin_lockBox}</div>
      <div>sparkeling clean votes: {props.RentalData[0].quickDetail.recentSparklingCleanVotes}</div>
  
      <div>short write up: {props.RentalData[0].quickDetail.writtenDescription.brief}</div>
      
  
      <div className='readMore'>Read more about the space </div>
      <div className='readMore'>Contact host </div>
      <div>Amenities </div>
      <div className='readMore'>Show all 35 amenities </div>
    </div>
  )
  
}

export default DescriptionMainContainer;
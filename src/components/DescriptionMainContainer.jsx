import React from 'react';
import style from './DescriptionMainContainer.css'
import QuickDetailHeader from './QuickDetailHeader.jsx'

const DescriptionMainContainer = (props) => {
  let writeUp = null;
  let readMoreLink = "Read more about the space"

  if(props.RentalData.readMore){
   
    writeUp = (
    <div>
      <div className={style.readMoreSubSectionTitles}>The Space</div>
      <div>{props.RentalData.rentalData.quickDetail.writtenDescription.theSpace}</div>
      <div className={style.readMoreSubSectionTitles}>Guest Access</div>
      <div>{props.RentalData.rentalData.quickDetail.writtenDescription.guestAccess}</div>
      <div className={style.readMoreSubSectionTitles}>Interaction with guests</div>
      <div>{props.RentalData.rentalData.quickDetail.writtenDescription.interactionWithGuest}</div>
      <div className={style.readMoreSubSectionTitles}>Other things to note</div>
      <div>{props.RentalData.rentalData.quickDetail.writtenDescription.otherThingsToNote}</div>
    </div>
    );

    readMoreLink = "Hide"

  }

  let toShow = "loading........."

  if(Object.keys(props.RentalData).length > 1){
    toShow = 
    <div className={style.mainContainer}>
      <h1>{props.RentalData.rentalData.detailHead.title}</h1>
      <div className={style.detailHeadCityAndPhoto}>
        <div>{props.RentalData.rentalData.detailHead.city}</div>
        <img src ={props.RentalData.rentalData.detailHead.photoUrl} alt="host photo" height="42" />
      </div>
      

      <div className={style.entireContainer}>
        <div className={style.entireTitle}>Entire Apartment</div>
        <div className={style.entireDetails}>
          <div>{props.RentalData.rentalData.entireRental.numOfGuest} guests <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBedroom} bedroom <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBeds} beds <span>&#183;</span></div>
          <div>{props.RentalData.rentalData.entireRental.numOfBathroom} baths</div>  
        </div>

        <QuickDetailHeader RentalData={props.RentalData}/>
      </div>

      {/* <div>{props.RentalData.rentalData.hostInfo.name} is a superhost </div> */}
      <div>self check in: {props.RentalData.rentalData.quickDetail.selfCheckin_lockBox}</div>
      <div>sparkeling clean votes: {props.RentalData.rentalData.quickDetail.recentSparklingCleanVotes}</div>
      <hr/>
      <div>short write up: {props.RentalData.rentalData.quickDetail.writtenDescription.brief}</div>
      <div>{writeUp}</div>
      
  
      <div onClick={props.readMoreHandler} className={style.readMore}>{readMoreLink} </div>
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
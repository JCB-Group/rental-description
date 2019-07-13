import React from 'react';
import style from './Amenities.css';

const Amenities = (props) => {
  let toShow = 'loading.........';
  let amenitiesToDisplay = null;

  if (Object.keys(props.RentalData).length > 1) {
    if (props.RentalData.showMoreAmenities) {
      let obj = props.RentalData.rentalData.quickDetail.amenities

      for (var key in obj) {
        if(obj[key].length > 0){
          amenitiesToDisplay = obj[key].map(amenitie => {
            // <div>{amenitie}</div> 
            console.log(amenitie)
          })
        }
      }
    }

    console.log(amenitiesToDisplay); // this is null.......weird. explore this tomrrow morning


    toShow =(
      <div className={style.mainContainer}>
        <div className={style.Amenities}>Amenities </div>
        <div onClick={props.showMoreAmenitiesHandler} className={style.readMore}>Show all 30 amenities </div>
        <div>{amenitiesToDisplay}</div>
        {/* <amenitiesToDisplay/> */}
        <hr />
      </div>
    );
  }

  return (
    <div>
      <div>{toShow}</div>
      <div>{amenitiesToDisplay}</div>
    </div>
  );
};

export default Amenities;

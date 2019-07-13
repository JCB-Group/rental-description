import React from 'react';
import style from './Amenities.css';

const Amenities = (props) => {
  let toShow = 'loading.........';

  let listItemBasics = null;
  let basics = null;

  let listItemBedAndBath = null;
  let BedAndBath = null;

  let listItemDining = null;
  let dining = null;

  let listItemEssentials = null;
  let Essentials = null;

  let listItemFacilities = null;
  let Facilities = null;

  let listItemGuestAccess = null;
  let GuestAccess = null;

  let listItemLogistics = null;
  let Logistics = null;

  let listItemOutDoor = null;
  let outDoor = null;

  let listItemSafteyFeature = null;
  let safteyFeature = null;


  toShow = (
    <div className={style.mainContainer}>
      <div className={style.Amenities}>Amenities </div>
      <div onClick={props.showMoreAmenitiesHandler} className={style.readMore}>Show all 30 amenities </div>
      <hr />
    </div>
  );

  if (props.RentalData.showMoreAmenities) {

    listItemBasics = props.RentalData.rentalData.amenities.basics.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    basics = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>Basics</div>
        <div>{listItemBasics}</div>
        <hr />
      </div>
    );

    listItemBedAndBath = props.RentalData.rentalData.amenities.BedAndBath.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    BedAndBath = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>BedAndBath</div>
        <div>{listItemBedAndBath}</div>
        <hr />
      </div>
    );

    listItemDining = props.RentalData.rentalData.amenities.dining.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    dining = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>dining</div>
        <div>{listItemDining}</div>
        <hr />
      </div>
    );

    listItemEssentials = props.RentalData.rentalData.amenities.essentials.map((e) => {
      return (<div key={e}>{e}</div>);
    });

    Essentials = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>Essentials</div>
        <div>{listItemEssentials}</div>
        <hr />
      </div>
    );

    listItemFacilities = props.RentalData.rentalData.amenities.facilities.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    Facilities = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>Facilities</div>
        <div>{listItemFacilities}</div>
        <hr />
      </div>
    );

    listItemGuestAccess = props.RentalData.rentalData.amenities.guestAccess.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    GuestAccess = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>GuestAccess</div>
        <div>{listItemGuestAccess}</div>
        <hr />
      </div>
    );

    listItemLogistics = props.RentalData.rentalData.amenities.logistics.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    Logistics = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>Logistics</div>
        <div>{listItemLogistics}</div>
        <hr />
      </div>
    );

    listItemOutDoor = props.RentalData.rentalData.amenities.outDoor.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    outDoor = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>Outdoors</div>
        <div>{listItemOutDoor}</div>
        <hr />
      </div>
    );

    listItemSafteyFeature = props.RentalData.rentalData.amenities.safteyFeature.map((e) => {
      return (<div key={e}>{e}</div>);
    });
    safteyFeature = (
      <div className={style.AmenitiesShowAll}>
        <div className={style.AmenitiesShowAllTitle}>SafteyFeature</div>
        <div>{listItemSafteyFeature}</div>
      </div>
    );

    toShow = <div onClick={props.showMoreAmenitiesHandler}>x</div>;

    // let obj = props.RentalData.rentalData.amenities;

    // for (var key in obj) {
    //   if(obj[key].length > 0){
    //     amenitiesToDisplay = obj[key].map(amenitie => {
    //       // <div>{amenitie}</div>
    //       console.log (amenitie)
    //     })
    //   }
    // }
  }
  return (
    <div>
      <div>{toShow}</div>
      <div>{basics}</div>
      <div>{BedAndBath}</div>
      <div>{dining}</div>
      <div>{Essentials}</div>
      <div>{Facilities}</div>
      <div>{GuestAccess}</div>
      <div>{Logistics}</div>
      <div>{outDoor}</div>
      <div>{safteyFeature}</div>
    </div>
  );
};

export default Amenities;

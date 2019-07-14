import React from 'react';
import style from './DescriptionMainContainer.css';
import QuickDetailHeader from './QuickDetailHeader.jsx'
import ReadMore from './ReadMore.jsx';
import DescriptionMainHeader from './DescriptionMainHeader.jsx';
import Amenities from './Amenities.jsx';
import EntireDetails from './entireDetails.jsx';

const DescriptionMainContainer = (props) => {
  let writeUp = null;
  let readMoreLink = 'Read more about the space';

  if (props.RentalData && props.RentalData.readMore) {
    writeUp = <ReadMore RentalData={props.RentalData} />;
    readMoreLink = 'Hide';
  }

  let toShow = 'loading.........';
  if (Object.keys(props.RentalData).length > 2) {
    toShow = (

      <div className={style.mainContainer}>
        <DescriptionMainHeader RentalData={props.RentalData} />
        <div className={style.entireContainer}>
          <EntireDetails RentalData={props.RentalData} />
          <QuickDetailHeader RentalData={props.RentalData} />
        </div>
        <hr/>
        <div className={style.writeUp}>short write up: {props.RentalData.rentalData.writtenDescription.brief}</div>
        <div>{writeUp}</div>
        <div onClick={props.readMoreHandler} className={style.readMore}>{readMoreLink} </div>
        <div className={style.readMore}>Contact host </div>
        <hr />
        <Amenities RentalData={props.RentalData} showMoreAmenitiesHandler={props.showMoreAmenitiesHandler} />
      </div>
    );
  }

  return (
    <div>
      {toShow}
    </div>
  );
};

export default DescriptionMainContainer;

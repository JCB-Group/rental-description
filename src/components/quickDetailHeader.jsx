import React from 'react';
import style from './quickDetailHeader.css';


const quickDetailHeader = (props) => {
  let superHost = null;
  let recentSparklingCleanVotes = null;
  let selfCheckinLockBox = null;
  let greatLoction = null;
  let RecentGuest5StarCheckIn = null;

  let count = 3;

  if (!props.RentalData.rentalData.hostInfo.superhost) {
    count ++;
    superHost = (
      <div>
        <div className={style.title}> {props.RentalData.rentalData.hostInfo.name} is a superHost</div>
        <div className={style.info}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
      </div>
    );
  }

  if (props.RentalData.rentalData.quickDetail.recentSparklingCleanVotes) {
    count ++;
    recentSparklingCleanVotes = (
      <div>
        <div className={style.title}> Sparkling clean </div>
        <div> {props.RentalData.rentalData.hostInfo.recentSparklingCleanVotes} Recent guests said this place was sparkling clean.
 </div>
      </div>
    );
  }

  if (props.RentalData.rentalData.quickDetail.selfCheckin_lockBox) {
    count ++;
    selfCheckinLockBox = (
      <div>
        <div className={style.title}> Self check-in </div>
        <div>Check yourself in with the keypad.</div>
      </div>
    );
  }

  if (props.RentalData.rentalData.quickDetail.greatLoction.exists) {
    count ++;
    greatLoction = (
      <div>
        <div className={style.title}> Great location </div>
        <div>100% of recent guests gave the location a 5-star rating.</div>
      </div>
    );
  }

  if (props.RentalData.rentalData.quickDetail.RecentGuest5StarCheckIn > 0) {
    count ++;
    RecentGuest5StarCheckIn = (
      <div>
        <div className={style.title}> Great check-in experience </div>
        <div>95% of recent guests gave the check-in process a 5-star rating.</div>
      </div>
    );
  }

  console.log(count);
  return (
    <div>
      <div>{superHost}</div>
      <div>{recentSparklingCleanVotes}</div>
      <div>{selfCheckinLockBox}</div>
      <div>{greatLoction}</div>
      <div>{RecentGuest5StarCheckIn}</div>
    </div>
  );
};

export default quickDetailHeader;

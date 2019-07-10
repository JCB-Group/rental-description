import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionMainContainer from './components/DescriptionMainContainer.jsx';
import $ from 'jquery';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = { RentalData: [{
      entireRental: {numOfGuest: "3", numOfBedroom: 4, numOfBeds: 1, numOfBathroom: 3},
      hostInfo:{name: "Tayor", superhost: false},
      quickDetail:{
        BedAndBath: ["debitis"],
        RecentGuest5StarCheckIn: 2,
        amenities: {basics: Array(2), essentials: Array(2)},
        checkInRating: 2,
        dining: ["quas"],
        facilities: ["extra pillows"],
        greatLoction: {exists: false, description: "debitis"},
        guestAccess: ["et"],
        logistics: ["nemo"],
        outDoor: ["debitis"],
        recentSparklingCleanVotes: 1,
        safteyFeature: ["sit"],
        selfCheckin_lockBox: true,
        writtenDescription: {
          brief: "More than 500 AMAZING REVIEWS! Ideally located in the heart of the city, beautiful apartment well decorated, 1 to 4 people. Quiet, cozy, fully equipped, air conditioner and wifi, next to shops, in the best neighborhood of Avignon.Autonomous check-in 24 hours a dayParking spaces at 20 meters.5 minutes walk: Palace of the Popes, Avignon's bridge, center train station.", 
          theSpace: "ipsa", 
          guestAccess: "voluptatibus", 
          interactionWithGuest: "modi", 
          otherThingsToNote: "aut"
        }
      }
    }],
    readMore: false
  };
  }

  componentDidMount() {
    $.get("http://localhost:3000/getData", (data) => {
      // this.setState({RentalData: data})
      console.log(data)
    })
  }

  render(){
    return (
      <div>
        <DescriptionMainContainer readMore={this.state.readMore} RentalData={this.state.RentalData}/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('like_button_container') )




[{
entireRental: {numOfGuest: "3", numOfBedroom: 4, numOfBeds: 1, numOfBathroom: 3},
hostInfo:{name: "laborum", superhost: false},

  quickDetail:{
    BedAndBath: [4],
    RecentGuest5StarCheckIn: 2,
    amenities: {basics: Array(2), essentials: Array(2)},
    checkInRating: 2,
    dining: ["quas"],
    facilities: ["extra pillows"],
    greatLoction: {exists: false, description: "debitis"},
    guestAccess: ["et"],
    logistics: ["nemo"],
    outDoor: ["debitis"],
    recentSparklingCleanVotes: 1,
    safteyFeature: ["sit"],
    selfCheckin_lockBox: true,
    writtenDescription: {brief: "dolorem", theSpace: "ipsa", guestAccess: "voluptatibus", interactionWithGuest: "modi", otherThingsToNote: "aut"}
  }
}]
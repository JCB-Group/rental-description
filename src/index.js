import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DescriptionMainContainer from './components/DescriptionMainContainer.jsx';
import Amenities from './components/Amenities.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readMore: false,
      showMoreAmenities: false,
    };
    this.readMoreHandler = this.readMoreHandler.bind(this);
    this.showMoreAmenitiesHandler = this.showMoreAmenitiesHandler.bind(this);
  }

  componentDidMount() {
    $.get('http://localhost:3000/getData', (data) => {
      this.setState({ rentalData: data[0] });
    });
  }

  showMoreAmenitiesHandler() {
    this.setState({ showMoreAmenities: !this.state.showMoreAmenities });
  }

  readMoreHandler() {
    this.setState({ readMore: !this.state.readMore });
  }

  render() {
    return (
      <div>
        <DescriptionMainContainer readMoreHandler={this.readMoreHandler}  RentalData={this.state} />
        <Amenities RentalData={this.state} showMoreAmenitiesHandler={this.showMoreAmenitiesHandler} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('like_button_container'));

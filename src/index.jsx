import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DescriptionMainContainer from './components/DescriptionMainContainer.jsx';


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
    $.get('/getData', (data) => {
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
        <DescriptionMainContainer
          readMoreHandler={this.readMoreHandler}
          showMoreAmenitiesHandler={this.showMoreAmenitiesHandler}
          RentalData={this.state}
        />
      </div>
    );
  }
}
// ReactDOM.render(<Index />, document.getElementById('like_button_container'));
ReactDOM.render(<Index />, document.getElementById('rentalDescriptions'));

import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionMainContainer from './components/DescriptionMainContainer.jsx';
import $ from 'jquery';

class Index extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      readMore: false
    }
    this.readMoreHandler = this.readMoreHandler.bind(this)
  };

  readMoreHandler() {
    this.setState({readMore: !this.state.readMore})
  }
  

  componentDidMount() {
    $.get("http://localhost:3000/getData", (data) => {
      this.setState({rentalData: data[0]})
    })
  }

  render(){
    return (
      <div>

        <DescriptionMainContainer readMoreHandler={this.readMoreHandler} RentalData={this.state}/>

      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('like_button_container') )
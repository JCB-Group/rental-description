import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionMainContainer from './components/like_button.jsx';

const Index = () => {
  return (
    <div>
      <h1>hellow from index.js</h1>
      <DescriptionMainContainer/>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById('like_button_container') )
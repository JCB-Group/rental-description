import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionMainContainer from './components/like_button.jsx';

var Index = function Index() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'hellow from index.js'
    ),
    React.createElement(DescriptionMainContainer, null)
  );
};

ReactDOM.render(React.createElement(Index, null), document.getElementById('like_button_container'));
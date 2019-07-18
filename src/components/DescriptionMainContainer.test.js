import React from 'react';
import { shallow } from 'enzyme';

import DescriptionMainContainer from './DescriptionMainContainer';

describe('DescriptionMainContainer component', () => {
  test('renders', () => {
    const wrapper = shallow(<DescriptionMainContainer RentalData={{
      readMore: true,
      rentalData: {
        writtenDescription: 'hello',
        detailHead: 'hello',
        entireRental: 'hello',
        quickDetail: 'hello',
      },
    }}/>);
    expect(wrapper.exists()).toBe(true);
  });
});


describe('Find 1 h1', () => {
  it('renders 1 h1', () => {
    const wrapper = shallow(<DescriptionMainContainer RentalData={{
      readMore: true,
      rentalData: {
        writtenDescription: 'hello',
        detailHead: 'hello',
        entireRental: 'hello',
        quickDetail: 'hello',
      },
    }}/>);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});


describe('Find 1 h1', () => {
  it('renders 1 h1', () => {
    const wrapper = shallow(<DescriptionMainContainer RentalData={{
      readMore: true,
      rentalData: {
        writtenDescription: 'hello',
        detailHead: 'hello',
        entireRental: 'hello',
        quickDetail: 'hello',
      },
    }}/>);
    expect(wrapper.find('style.entireContainer')).toHaveLength(1);
  });
});

// pip: add a click test or a state change test

// this test work v //
// describe('Examining the syntax of Jest tests', () => {
//   it('sums numbers', () => {
//   expect(1 + 2).toEqual(3);
//   expect(2 + 2).toEqual(4);
//      });
//   });

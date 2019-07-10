import React from 'react';
import enzyme from 'enzyme';
import { shallow, mount, render, configure } from 'enzyme';
import DescriptionMainContainer from './DescriptionMainContainer.jsx';



import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Works, but i'm not sure why
// describe("search component", () => {
//   test("renders", () => {
//     const wrapper = shallow(<search />);
//     expect (wrapper.exists()).toBe(true);
//   })
// });

describe("search component", () => {
  test("renders", () => {
    const wrapper = shallow(<DescriptionMainContainer />);
    expect (wrapper.exists()).toBe(true);
  })
});


// describe('<DescriptionMainContainer />', () => {
//   it('renders three <Foo /> components', () => {
//     const wrapper = shallow(<DescriptionMainContainer />);
//     expect(wrapper.find(DescriptionMainContainer)).to.have.lengthOf(3);
//   });
// }); 

//this test work v //
// describe('Examining the syntax of Jest tests', () => {
//   it('sums numbers', () => { 
//   expect(1 + 2).toEqual(3);
//   expect(2 + 2).toEqual(4);
//      });
//   });
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<MyComponent />);
  });
  it("should render intial layout", () => {
    //when
    const componentTA = shallow(<MyComponent />);
    //then
    expect(componentTA.getElements()).toMatchSnapshot()
  });
  it("should create an entry in component state", () => {
    //given
    const componentTB = shallow(<MyComponent/>)
    const form = componentTB.find('input');
    form.props().onChange({target:{
      name: 'myName',
      value: 'myValue'
    }});
    //then
    //expect(componentTB.state('input')).toBeDefined();
    expect(componentTB.state('input')).toEqual('myValue');
  });
});

import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import CardDivider from './../cardDivider';

/** @test {CardDivider#render} */
describe('CardDivider#render', () => {
  it('should render with the good style', () => {
    const wrapper = shallow(
      <CardDivider>
        <Text>Test</Text>
      </CardDivider>,
    );
    const expectedStyle = {
      height: 1,
      opacity: 0.12,
    };
    expect(wrapper.find(View).prop('style')).toEqual([
      expectedStyle,
      { backgroundColor: '#000000' },
    ]);
  });

  it('should render with the good style and good backgroundColor', () => {
    const wrapper = shallow(
      <CardDivider color="red">
        <Text>Test</Text>
      </CardDivider>,
    );
    const expectedStyle = {
      height: 1,
      opacity: 0.12,
    };
    expect(wrapper.find(View).prop('style')).toEqual([expectedStyle, { backgroundColor: 'red' }]);
  });
});

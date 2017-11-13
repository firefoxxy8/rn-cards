import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import CardLayout from './../cardLayout';

/** @test {CardLayout#render} */
describe('CardLayout#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardLayout>
        <Text>Test</Text>
      </CardLayout>,
    );
  });

  it('should render the children', () => {
    expect(wrapper.find(View).prop('children')).toEqual(<Text>Test</Text>);
  });

  it('should have a style containing a radius of 2dp, a background white and an elevation of 1', () => {
    const expectedStyle = StyleSheet.create({
      container: {
        borderRadius: 2,
        backgroundColor: '#ffffff',
      },
    });
    expect(wrapper.find(View).prop('style')).toEqual([expectedStyle.container, { elevation: 2 }]);
  });

  it('should have a style containing a radius of 2dp, a background white and an elevation of 8 if isElevated is true', () => {
    wrapper = shallow(
      <CardLayout isElevated>
        <Text>Test</Text>
      </CardLayout>,
    );
    const expectedStyle = StyleSheet.create({
      container: {
        borderRadius: 2,
        backgroundColor: '#ffffff',
      },
    });
    expect(wrapper.find(View).prop('style')).toEqual([expectedStyle.container, { elevation: 8 }]);
  });
});

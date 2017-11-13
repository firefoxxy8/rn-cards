import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import CardActions from './../cardActions';

/** @test {CardActions#render} */
describe('CardActions#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardActions>
        <Text>Test</Text>
        <Text>Test</Text>
      </CardActions>,
    );
  });

  it('should render the children', () => {
    expect(wrapper.find(View).prop('children').length).toEqual(2);
  });

  it('should have a style with padding of 8', () => {
    const expectedStyle = StyleSheet.create({
      container: {
        padding: 8,
      },
    });
    expect(wrapper.find(View).prop('style')).toEqual(expectedStyle.container);
  });
});

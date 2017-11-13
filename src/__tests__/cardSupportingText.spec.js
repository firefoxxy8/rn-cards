import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import CardSupportingText from './../CardSupportingText';

/** @test {CardSupportingText#render} */
describe('CardSupportingText#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardSupportingText content="test" />);
  });

  it('should render the content', () => {
    expect(wrapper.find(Text).prop('children')).toEqual('test');
  });

  it('should have a default style with padding equals to 16, except bottom to 24', () => {
    const expectedStyle = StyleSheet.create({
      container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        fontSize: 14,
        opacity: 0.87,
        lineHeight: 24,
      },
    });
    expect(wrapper.find(Text).prop('style')).toEqual([
      expectedStyle.container,
      { paddingBottom: 16 },
      { color: '#000000' },
    ]);
  });

  it('should have a default style with padding equals to 16 when isLittle is true', () => {
    wrapper = shallow(
      <CardSupportingText isBig content="test" color="red">
        <Text>Test</Text>
      </CardSupportingText>,
    );

    const expectedStyle = StyleSheet.create({
      container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        fontSize: 14,
        opacity: 0.87,
        lineHeight: 24,
      },
    });

    expect(wrapper.find(Text).prop('style')).toEqual([
      expectedStyle.container,
      { paddingBottom: 24 },
      { color: 'red' },
    ]);
  });
});

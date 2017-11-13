import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import CardTitle from './../CardTitle';

/** @test {CardTitle#render} */
describe('CardTitle#render', () => {
  let wrapper;
  let title;
  let subtitle;
  let rootView;

  beforeEach(() => {
    wrapper = shallow(<CardTitle title="Title" subtitle="Subtitle" color="red" />);
    rootView = wrapper.find(View);
    title = wrapper.find(Text).first();
    subtitle = wrapper.find(Text).at(1);
  });

  it('should have rendered a Title with color equals to red', () => {
    expect(title.prop('style')[2]).toEqual({ color: 'red' });
  });

  it('should have rendered a text with Title inside', () => {
    expect(title.prop('children')).toEqual('Title');
  });

  it('should have rendered a subtitle of size 14', () => {
    expect(subtitle.prop('style')).toEqual({ fontSize: 14 });
  });

  it('should have rendered a text with Subtitle inside', () => {
    expect(subtitle.prop('children')).toEqual('Subtitle');
  });

  it('should have a default padding equals to 16', () => {
    const expectedStyle = StyleSheet.create({
      container: {
        paddingRight: 16,
        paddingLeft: 16,
      },
      keyline16: {
        paddingTop: 16,
        paddingBottom: 16,
      },
    });
    expect(rootView.prop('style')).toEqual([expectedStyle.container, expectedStyle.keyline16]);
  });

  it('should have a style with paddingTop and paddingBottom equals to 24 if isBig is set', () => {
    wrapper = shallow(<CardTitle title="Title" subtitle="Subtitle" isBig />);
    rootView = wrapper.find(View);
    const expectedStyle = StyleSheet.create({
      container: {
        paddingRight: 16,
        paddingLeft: 16,
      },
      keyline24: {
        paddingTop: 24,
        paddingBottom: 24,
      },
    });
    expect(rootView.prop('style')).toEqual([expectedStyle.container, expectedStyle.keyline24]);
  });

  it('should have a style with paddingTop equals to 16 and paddingBottom equals to 24 if withActions is set', () => {
    wrapper = shallow(<CardTitle title="Title" subtitle="Subtitle" withActions />);
    rootView = wrapper.find(View);
    const expectedStyle = StyleSheet.create({
      container: {
        paddingRight: 16,
        paddingLeft: 16,
      },
      withBottomActions: {
        paddingTop: 24,
        paddingBottom: 16,
      },
    });
    expect(rootView.prop('style')).toEqual([
      expectedStyle.container,
      expectedStyle.withBottomActions,
    ]);
  });
});

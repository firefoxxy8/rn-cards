import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import CardAvatarTitle from './../CardAvatarTitle';

/** @test {CardAvatarTitle#render} */
describe('CardAvatarTitle#render', () => {
  let wrapper;
  let AvatarMock;

  beforeEach(() => {
    AvatarMock = () => <Text>Test avatar</Text>;
    wrapper = shallow(
      <CardAvatarTitle title="Title" subtitle="Subtitle" Avatar={AvatarMock} color="red" />,
    );
  });

  it('should render a text containing the title props', () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .prop('children'),
    ).toEqual('Title');
  });

  it('should render a text containing the subtitle props', () => {
    expect(
      wrapper
        .find(Text)
        .at(1)
        .prop('children'),
    ).toEqual('Subtitle');
  });

  it('should render the first text containing the style props containing a color', () => {
    expect(
      wrapper
        .find(Text)
        .at(0)
        .prop('style'),
    ).toEqual([
      {
        fontWeight: '500',
        opacity: 0.87,
      },
      {
        color: 'red',
      },
    ]);
  });

  it('should render the second text containing the style props containing a color', () => {
    expect(
      wrapper
        .find(Text)
        .at(1)
        .prop('style'),
    ).toEqual([
      {
        opacity: 0.54,
        fontWeight: '300',
      },
      {
        color: 'red',
      },
    ]);
  });

  it('should render a View container with height equals to 72 and padding equals to 16', () => {
    expect(
      wrapper
        .find(View)
        .first()
        .prop('style'),
    ).toEqual({ alignItems: 'center', flexDirection: 'row', height: 72, padding: 16 });
  });

  it('should render a View containing the Avatar with a height and width equals to 48', () => {
    expect(
      wrapper
        .find(View)
        .at(1)
        .prop('style'),
    ).toEqual({ height: 48, width: 48 });
  });

  it('should render a View containing the two texts and a paddingLeft style equals to 16', () => {
    expect(
      wrapper
        .find(View)
        .at(2)
        .prop('style'),
    ).toEqual({ paddingLeft: 16, flexDirection: 'column' });
  });

  it('should render a Text corresponding to the avatar component', () => {
    expect(wrapper.find(AvatarMock).length).toEqual(1);
  });
});

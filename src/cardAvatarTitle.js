import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    height: 72,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBlock: {
    flexDirection: 'column',
    paddingLeft: 16,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  title: {
    fontWeight: '500',
    opacity: 0.87,
  },
  subtitle: {
    opacity: 0.54,
    fontWeight: '300',
  },
});

export default function CardAvatarTitle({ Avatar, title, subtitle, color }) {
  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Avatar />
      </View>

      <View style={style.textBlock}>
        <Text style={[style.title, { color }]}>{title}</Text>
        <Text style={[style.subtitle, { color }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

CardAvatarTitle.defaultProps = {
  color: '#000000',
};

CardAvatarTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  Avatar: PropTypes.func.isRequired,
  color: PropTypes.string,
};

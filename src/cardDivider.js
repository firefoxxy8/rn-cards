import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    height: 1,
    opacity: 0.12,
  },
});

export default function CardDivider({ color }) {
  const backgroundColor = color;
  return <View style={[style.container, { backgroundColor }]} />;
}

CardDivider.defaultProps = {
  color: '#000000',
};

CardDivider.propTypes = {
  color: PropTypes.string,
};

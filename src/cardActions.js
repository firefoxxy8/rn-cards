import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default function CardActions({ children }) {
  return <View style={style.container}>{children}</View>;
}

CardActions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

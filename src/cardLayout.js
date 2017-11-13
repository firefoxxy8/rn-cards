import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  notElevated: {
    elevation: 2,
  },
  elevated: {
    elevation: 8,
  },
});

export default function CardLayout({ children, isElevated }) {
  const elevationStyle = isElevated ? style.elevated : style.notElevated;
  return <View style={[style.container, elevationStyle]}>{children}</View>;
}

CardLayout.defaultProps = {
  isElevated: false,
};

CardLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isElevated: PropTypes.bool,
};

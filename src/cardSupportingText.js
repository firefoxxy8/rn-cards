import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8, // 24 - 16
    fontSize: 14,
    opacity: 0.87,
    lineHeight: 24,
  },
  keyline24: {
    paddingBottom: 24,
  },
  keyline16: {
    paddingBottom: 16,
  },
});

export default function CardSupportingText({ content, isBig, color }) {
  const paddingBottomStyle = isBig ? style.keyline24 : style.keyline16;
  return <Text style={[style.container, paddingBottomStyle, { color }]}>{content}</Text>;
}

CardSupportingText.defaultProps = {
  isBig: false,
  color: '#000000',
};

CardSupportingText.propTypes = {
  content: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
  color: PropTypes.string,
};

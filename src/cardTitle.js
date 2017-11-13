import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  keyline16: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  keyline24: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  withBottomActions: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  littleSize: {
    fontSize: 14,
  },
  bigSize: {
    fontSize: 24,
    marginBottom: 12,
    opacity: 0.87,
  },
  bold: {
    fontWeight: '300',
  },
});

function computeStyles(isBig, withActions) {
  if (isBig) {
    return style.keyline24;
  }

  if (withActions) {
    return style.withBottomActions;
  }

  return style.keyline16;
}

export default function CardTitle({ title, subtitle, isBig, withActions, color }) {
  const paddingStyle = computeStyles(isBig, withActions);

  return (
    <View style={[style.container, paddingStyle]}>
      <Text style={[style.bigSize, style.bold, { color }]}>{title}</Text>
      <Text style={style.littleSize}>{subtitle}</Text>
    </View>
  );
}

CardTitle.defaultProps = {
  isBig: false,
  withActions: false,
  color: '#000000',
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
  withActions: PropTypes.bool,
  color: PropTypes.string,
};

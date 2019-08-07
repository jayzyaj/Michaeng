import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import { COLORS, SIZES } from '../../constants/themes';
import { handleMargins, handlePaddings } from '../../helpers/margin';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: SIZES.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  accent: { backgroundColor: COLORS.accent },
  primary: { backgroundColor: COLORS.primary },
  secondary: { backgroundColor: COLORS.secondary },
  tertiary: { backgroundColor: COLORS.tertiary },
  black: { backgroundColor: COLORS.black },
  white: { backgroundColor: COLORS.white },
  gray: { backgroundColor: COLORS.gray },
  gray2: { backgroundColor: COLORS.gray2 },
});

const Block = ({
  flex,
  row,
  column,
  center,
  middle,
  left,
  right,
  top,
  bottom,
  card,
  shadow,
  color,
  space,
  padding,
  margin,
  animated,
  wrap,
  style,
  children,
  ...props
}) => {
  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins(margin) },
    padding && { ...handlePaddings(padding) },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color], // predefined styles COLORS for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style, // rewrite predefined styles
  ];

  if (animated) {
    return (
      <Animated.View style={blockStyles} {...props}>
        {children}
      </Animated.View>
    );
  }

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

Block.propTypes = {
  flex: PropTypes.bool,
  row: PropTypes.bool,
  column: PropTypes.bool,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  space: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  margin: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  animated: PropTypes.bool,
  wrap: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

Block.defaultProps = {
  flex: null,
  row: false,
  column: false,
  center: false,
  middle: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  card: false,
  shadow: false,
  color: null,
  space: null,
  padding: null,
  margin: null,
  animated: false,
  wrap: false,
  style: null,
  children: null,
};

export default Block;

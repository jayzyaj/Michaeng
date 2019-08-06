import React from "react";
import {
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import PropTypes from 'prop-types';

import {
  COLORS,
  FONTS,
  SIZES,
} from "../../constants/themes";

const styles = StyleSheet.create({
  // default styles
  text: {
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  // variations
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "500",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: COLORS.accent },
  primary: { color: COLORS.primary },
  secondary: { color: COLORS.secondary },
  tertiary: { color: COLORS.tertiary },
  black: { color: COLORS.black },
  white: { color: COLORS.white },
  gray: { color: COLORS.gray },
  gray2: { color: COLORS.gray2 },
  error: { color: COLORS.error },
  // fonts
  h1: FONTS.h1,
  h2: FONTS.h2,
  h3: FONTS.h3,
  title: FONTS.title,
  body: FONTS.body,
  caption: FONTS.caption,
  small: FONTS.small,
});

const Typography = ({
  h1,
  h2,
  h3,
  title,
  body,
  caption,
  small,
  size,
  transform,
  align,
  // styling
  regular,
  bold,
  semibold,
  medium,
  weight,
  light,
  center,
  right,
  spacing, // letter-spacing
  height, // line-height
  color,
  accent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  gray2,
  error,
  isInsideButton,
  style,
  icon,
  children,
  ...props
}) => {
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && { color },
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    error && styles.error,
    style, // rewrite predefined styles
  ];

  let labelValue = children;
  if (Platform.OS === 'android' && isInsideButton) labelValue = children.toUpperCase();

  return (
    <Text style={textStyles} {...props}>
      { icon && icon }
      {labelValue}
    </Text>
  );
};

Typography.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  title: PropTypes.bool,
  body: PropTypes.bool,
  caption: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.number,
  transform: PropTypes.string,
  align: PropTypes.string,
  // styling
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
  weight: PropTypes.any,
  light: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  spacing: PropTypes.number, // letter-spacing
  height: PropTypes.number, // line-height
  color: PropTypes.string,
  accent: PropTypes.object,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  gray: PropTypes.bool,
  gray2: PropTypes.bool,
  error: PropTypes.bool,
  isInsideButton: PropTypes.bool,
  style: PropTypes.oneOf(PropTypes.array, PropTypes.object),
  icon: PropTypes.node,
  children: PropTypes.node,
};

Typography.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  title: false,
  body: false,
  caption: false,
  small: false,
  size: null,
  transform: null,
  align: null,
  // styling
  regular: false,
  bold: false,
  semibold: false,
  medium: false,
  weight: null,
  light: false,
  center: false,
  right: false,
  spacing: null, // letter-spacing
  height: null, // line-height
  color: null,
  accent: null,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  gray2: false,
  error: false,
  isInsideButton: false,
  style: null,
  icon: null,
  children: null,
};

export default Typography;

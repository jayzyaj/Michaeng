import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES } from '../../constants/themes';

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius,
    height: SIZES.base * 3,
    justifyContent: 'center',
    marginVertical: SIZES.padding / 3,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: { backgroundColor: COLORS.accent },
  primary: { backgroundColor: COLORS.primary },
  secondary: { backgroundColor: COLORS.secondary },
  tertiary: { backgroundColor: COLORS.tertiary },
  black: { backgroundColor: COLORS.black },
  white: { backgroundColor: COLORS.white },
  gray: { backgroundColor: COLORS.gray },
  gray2: { backgroundColor: COLORS.gray2 },
  gray3: { backgroundColor: COLORS.gray3 },
  gray4: { backgroundColor: COLORS.gray4 },
});

const Button = ({
  style,
  opacity,
  gradient,
  color,
  startColor,
  endColor,
  end,
  start,
  locations,
  shadow,
  disabled,
  children,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity}
        disabled={disabled}
        {...props}
      >
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.any,
  opacity: PropTypes.number,
  gradient: PropTypes.bool,
  color: PropTypes.string,
  startColor: PropTypes.string,
  endColor: PropTypes.string,
  end: PropTypes.object,
  start: PropTypes.object,
  locations: PropTypes.array,
  shadow: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  style: null,
  gradient: false,
  shadow: false,
  children: null,
  startColor: COLORS.primary,
  endColor: COLORS.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  disabled: false,
  color: COLORS.white,
};

export default Button;

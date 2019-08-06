import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Block,
  Button,
  CrossPlatformIcon,
  Typography,
} from './index';

import { COLORS, SIZES } from '../../constants/themes';

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.black,
    borderRadius: SIZES.radius,
    fontSize: SIZES.font,
    fontWeight: '500',
    color: COLORS.black,
    height: SIZES.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: SIZES.base * 2,
    height: SIZES.base * 2,
    top: SIZES.base,
    right: 0,
  },
});

const Input = ({
  label,
  error,
  secure,
  rightLabel,
  rightStyle,
  onRightPress,
  keyboardType,
  style,
  ...props
}) => {
  const [toggleSecure, setToggleSecure] = useState(false);

  const renderLabel = () => (
    <Block flex={false}>
      {label ? <Typography gray2={!error} accent={error}>{label}</Typography> : null}
    </Block>
  );

  function renderRight() {
    if (!rightLabel) return null;
    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={onRightPress && onRightPress}
      >
        {rightLabel}
      </Button>
    );
  }

  function renderToggle() {
    const handleToggleSecure = () => setToggleSecure(prevToggleSecure => !prevToggleSecure);
    if (!secure) return null;
    return (
      <Button
        style={styles.toggle}
        onPress={handleToggleSecure}
      >
        {
          rightLabel
          || (
            <CrossPlatformIcon
              color={COLORS.gray}
              size={SIZES.font * 1.35}
              name={!toggleSecure ? 'eye' : 'eye-off'}
            />
          )
        }
      </Button>
    );
  }

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && { borderColor: COLORS.accent },
    style,
  ];

  return (
    <Block flex={false} margin={[SIZES.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        {...props}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.any,
  secure: PropTypes.bool,
  rightLabel: PropTypes.any,
  style: PropTypes.any,
  rightStyle: PropTypes.any,
  onRightPress: PropTypes.func,
  keyboardType: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  error: null,
  secure: false,
  rightLabel: null,
  style: null,
  rightStyle: null,
  onRightPress: null,
  keyboardType: 'default',
};

export default Input;

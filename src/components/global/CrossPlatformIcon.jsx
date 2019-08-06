import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const CrossPlatformIcon = ({
  name,
  size,
  color,
  outline,
  ...props
}) => {
  let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
  if (Platform.OS === 'ios' && outline) {
    iconName = `${iconName}-outline`;
  }
  return (
    <Icon
      name={iconName}
      size={size}
      color={color}
      {...props}
    />
  );
};

CrossPlatformIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  outline: PropTypes.bool,
};

CrossPlatformIcon.defaultProps = {
  name: null,
  size: null,
  color: null,
  outline: false,
};

export default CrossPlatformIcon;

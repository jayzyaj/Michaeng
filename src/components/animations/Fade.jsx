import {
  Animated,
  Easing,
  Platform,
} from 'react-native';

import React, {
  useRef,
  memo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const areVisibleEqual = (prevProps, nextProps) => (prevProps.visible === nextProps.visible);

const Fade = memo(({
  style,
  visible,
  children,
  ...props
}) => {
  const _visibility = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(_visibility, {
      toValue: visible ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: Platform.OS === 'android',
    }).start();
  }, [visible]);

  const containerStyle = {
    opacity: _visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: _visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1.1, 1],
        }),
      },
    ],
  };

  const combinedStyle = [containerStyle, style];
  /*
    The children below is the primary component that is wrapped in this Fade component
  */
  return (
    <Animated.View style={visible ? combinedStyle : containerStyle} {...props}>
      {children}
    </Animated.View>
  );
}, areVisibleEqual);

Fade.propTypes = {
  visible: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
};

Fade.defaultProps = {
  visible: false,
  style: null,
};

export default Fade;

import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { TextLoader } from 'react-native-indicator';
import Proptypes from 'prop-types';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 128,
    width: 128,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const BackgroundLoader = ({ loading, text, ...props }) => (
  <Modal
    transparent
    animationType="none"
    visible={loading}
    {...props}
  >
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          size="large"
          animating={loading}
        />
        <TextLoader style={{ marginTop: 3 }} text={text} />
      </View>
    </View>
  </Modal>
);

BackgroundLoader.propTypes = {
  loading: Proptypes.bool,
  text: Proptypes.string,
};

BackgroundLoader.defaultProps = {
  loading: false,
  text: 'Loading...',
};

export default BackgroundLoader;

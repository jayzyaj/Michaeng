import React from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import PropTypes from 'prop-types';

import * as yup from 'yup';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import { login } from './AuthActions';

import { useLogoVisibility } from './hooks/useLogoVisibility';

import {
  Button,
  Block,
  Typography,
} from '../../components/global';
import Input from '../../components/global/Input';
import Fade from '../../components/animations/Fade';

import {
  COLORS,
  SIZES,
} from '../../constants/themes';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: COLORS.accent,
  },
});

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
});

const Login = ({
  navigation,
  auth,
  _requestLogin,
}) => {
  const isLogoShown = useLogoVisibility(true);
  const navigateToRegister = () => navigation.navigate('SignupScreen');

  const handleLogin = values => {
    Keyboard.dismiss();
    const { email, password } = values;
    _requestLogin(email, password);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.login}
      scrollEnable
      showsVerticalScrollIndicator={false}
      behavior="padding"
      keyboardShouldPersistTaps="handled"
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleLogin}
        validationSchema={schema}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit,
        }) => (
          <Block padding={[24, SIZES.base * 2]} style={{ marginTop: 40 }}>
            <Fade visible={isLogoShown}>
              <Typography h1 bold>Sign in</Typography>
            </Fade>
            <Block middle>
              <Fade visible={!!auth.error}>
                <Typography
                  error
                  bold
                  primary
                  center
                >
                    Incorrect email or password
                </Typography>
              </Fade>
              <Input
                email
                label="Email"
                keyboardType="email-address"
                error={touched.email && errors.email && styles.hasErrors}
                style={[styles.input, touched.email && errors.email && styles.hasErrors]}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              <Input
                secure
                label="Password"
                error={touched.password && errors.password && styles.hasErrors}
                style={[styles.input, touched.password && errors.password && styles.hasErrors]}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              <Button
                gradient
                disabled={auth.isLoading}
                onPress={handleSubmit}
              >
                {auth.isLoading
                  ? <ActivityIndicator size="small" color="white" />
                  : <Typography bold white center isInsideButton>Login</Typography>
                  }
              </Button>
              <Button onPress={navigateToRegister}>
                <Typography gray caption center style={{ textDecorationLine: 'underline' }}>
                  {"Don't have an account?"}
                </Typography>
              </Button>
            </Block>
          </Block>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  _requestLogin: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

Login.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  _requestLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

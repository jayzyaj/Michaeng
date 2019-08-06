import React, { useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as yup from 'yup';
import { Formik } from 'formik';

import { useLogoVisibility } from './hooks/useLogoVisibility';

import {
  Button,
  Block,
  Typography,
} from '../../components/global';
import Input from '../../components/global/Input';
import Fade from '../../components/animations/Fade';

import { COLORS, SIZES } from '../../constants/themes';

const styles = StyleSheet.create({
  signup: {
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
  firstName: yup
    .string()
    .required(),
  lastName: yup
    .string()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
});

const Signup = ({
  navigation,
}) => {
  const isLogoVisible = useLogoVisibility(true);
  const [isLoading, setLoading] = useState(false);

  const handleSignUp = values => {
    alert(JSON.stringify(values));
    Keyboard.dismiss();
  };

  const navigateBackToSignIn = () => navigation.navigate('LoginScreen');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.login}
      scrollEnabled
      showsVerticalScrollIndicator={false}
      behavior="padding"
      keyboardShouldPersistTaps="handled"
    >
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
        }}
        onSubmit={handleSignUp}
        validationSchema={schema}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Block padding={[0, SIZES.base * 2]}>
            <Fade visible={isLogoVisible}>
              <Typography h1 bold>Sign Up</Typography>
            </Fade>
            <Block middle>
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
                label="First Name"
                error={touched.firstName && errors.firstName && styles.hasErrors}
                style={[styles.input, touched.firstName && errors.firstName && styles.hasErrors]}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
              />
              <Input
                label="Last Name"
                error={touched.lastName && errors.lastName && styles.hasErrors}
                style={[styles.input, touched.lastName && errors.lastName && styles.hasErrors]}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
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
                disabled={!isValid}
                onPress={handleSubmit}
              >
                {isLoading
                  ? <ActivityIndicator size="small" color="white" />
                  : <Typography bold white center isInsideButton>Sign Up</Typography>
                }
              </Button>

              <Button onPress={navigateBackToSignIn}>
                <Typography gray caption center style={{ textDecorationLine: 'underline' }}>
                  Back to Login
                </Typography>
              </Button>
            </Block>
          </Block>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;

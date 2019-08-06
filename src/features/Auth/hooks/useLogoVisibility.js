/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export function useLogoVisibility(initialValue) {
  const [isLogoShown, setLogo] = useState(initialValue);

  const keyboardDidShow = () => setLogo(false);
  const keyboardDidHide = () => setLogo(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  return isLogoShown;
}

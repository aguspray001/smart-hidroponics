import {Alert} from 'react-native';
import {showMessage as showToast} from 'react-native-flash-message';
import {colors} from './colors';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'error',
    backgroundColor: type === 'success' ? colors.primary : '#D9435E',
  });
};
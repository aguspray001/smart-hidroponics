// import AsyncStorage from '@react-native-async-storage/async-storage';
import secStorage from 'react-native-sensitive-info';
// import {showMessage} from '../ShowMessage';
import jwt from 'jwt-decode';

export const readToken = async () => {
  const token = await secureGetData('token');
  if (token) {
    const memberData = jwt(token);
    return memberData && {token: token, memberData};
  }
  return false;
};

export const secureDeleteData = async key => {
  return secStorage.deleteItem(key, {
    sharedPreferencesName: 'gobpjsPref',
    keychainService: 'gobpjsKeychain',
  });
};

export const secureStoreData = async (key, value) => {
  return secStorage.setItem(key, value, {
    sharedPreferencesName: 'gobpjsPref',
    keychainService: 'gobpjsKeychain',
  });
};

export const secureGetData = async key => {
  return secStorage.getItem(key, {
    sharedPreferencesName: 'gobpjsPref',
    keychainService: 'gobpjsKeychain',
  });
};

// export const storeData = async (storageKey, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(storageKey, jsonValue);
//   } catch (e) {
//     showMessage('Gagal menyimpan di localstorage');
//   }
// };

// export const getData = async storageKey => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(storageKey);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     showMessage('Gagal mengambil data dari localstorage');
//   }
// };

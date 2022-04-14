import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

export const modalStyle = {
  backgroundColor: 'white',
  height: hp('50%'),
  width: wp('80%'),
  alignSelf: 'center',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
};

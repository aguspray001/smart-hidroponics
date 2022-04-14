import {RFPercentage} from 'react-native-responsive-fontsize';

export const fonts = {
  primary: {
    200: 'Nunito-ExtraLight',
    300: 'Nunito-Light',
    400: 'Nunito-Regular',
    600: 'Nunito-SemiBold',
    700: 'Nunito-Bold',
    800: 'Nunito-ExtraBold',
    900: 'Nunito-Black',
    normal: 'Nunito-Regular',
  },
  Secondary: {
    200: 'OpenSans-ExtraLight',
    300: 'OpenSans-Light',
    400: 'OpenSans-Regular',
    600: 'OpenSans-SemiBold',
    700: 'OpenSans-Bold',
    800: 'OpenSans-ExtraBold',
    900: 'OpenSans-Black',
    normal: 'Nunito-Regular',
  },
  size: {
    sm:     RFPercentage(1.8),
    normal: RFPercentage(2),
    md:     RFPercentage(2.5),
    lg:     RFPercentage(2.8),
    xl:     RFPercentage(3.2),
  },
};

import {Dimensions, Linking} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {showMessage} from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Fonts, FontSize} from '../constants/fonts';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const getResponsiveHeight = per => {
  return (HEIGHT * per) / 100;
};

export const getResponsiveWidth = per => {
  return (WIDTH * per) / 100;
};

export const statusBarHeight = getStatusBarHeight();

export const handleClickURL = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

export const Message = (
  message = 'Success',
  type = 'success',
  position = 'top',
  duration = 1850,
  autoHide = true,
) => {
  return showMessage({
    message: message,
    type: type,
    style: {alignItems: 'center', justifyContent: 'center'},
    titleStyle: {
      fontSize: FontSize.Font18,
      fontFamily: Fonts.GilroyMedium,
    },
    position: position,
    duration: duration,
    autoHide: autoHide,
  });
};

export const DeviceId = deviceInfoModule
  .getUniqueId()
  .then(uniqueId => uniqueId);

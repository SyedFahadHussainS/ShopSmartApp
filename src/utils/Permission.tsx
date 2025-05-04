import {PermissionsAndroid, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestCameraAndGalleryPermissions = async (): Promise<void> => {
  if (Platform.OS === 'android') {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      const galleryPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        galleryPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Android permissions granted');
      } else {
        console.warn('Android permissions denied');
      }
    } catch (error) {
      console.error('Android permission error:', error);
    }
  } else {
    try {
      const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
      const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

      if (cameraStatus === RESULTS.GRANTED && photoStatus === RESULTS.GRANTED) {
        console.log('iOS permissions granted');
      } else {
        console.warn('iOS permissions denied');
      }
    } catch (error) {
      console.error('iOS permission error:', error);
    }
  }
};

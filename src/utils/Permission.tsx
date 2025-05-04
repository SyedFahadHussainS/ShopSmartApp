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
        console.log('Camera and Gallery permissions granted');
      } else {
        console.log('Camera and/or Gallery permissions denied');
      }
    } catch (error) {
      console.error('Error requesting Android permissions:', error);
    }
  } else if (Platform.OS === 'ios') {
    try {
      const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
      const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

      if (cameraStatus === RESULTS.GRANTED && photoStatus === RESULTS.GRANTED) {
        console.log('Camera and Photo Library permissions granted');
      } else {
        console.log('Camera and/or Photo Library permissions denied');
      }
    } catch (error) {
      console.error('Error requesting iOS permissions:', error);
    }
  }
};

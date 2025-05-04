import {Platform, PermissionsAndroid} from 'react-native';

export const requestCameraAndGalleryPermissions = async (): Promise<void> => {
  if (Platform.OS === 'android') {
    try {
      // Request Camera Permission
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      // Request Gallery (Storage) Permission
      const galleryPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      // Check if both permissions were granted
      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        galleryPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and Gallery permissions granted');
      } else {
        console.log('Camera and/or Gallery permissions denied');
      }
    } catch (error) {
      console.error('Error requesting permissions:', error);
    }
  }
};

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {requestCameraAndGalleryPermissions} from './utils/Permission'; // adjust the path as needed
import AppNavigator from './navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './utils/ToastConfig';

const App = () => {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await requestCameraAndGalleryPermissions();
      } catch (error) {
        console.error('Failed to request permissions:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;

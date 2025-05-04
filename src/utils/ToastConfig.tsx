import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

// Define custom styles for different toast types
export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#00b894', backgroundColor: '#E8F5E9' }} // green theme
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00b894',
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#F44336', backgroundColor: '#FFEBEE' }} // red theme
      text1Style={{
        fontSize: 12,
        color: '#C62828',
      }}
    />
  ),
};

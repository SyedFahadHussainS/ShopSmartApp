import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
    avatarContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: '#ddd',
      backgroundColor: '#e1e1e1',
    },
    avatarPlaceholder: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#bbb',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#ddd',
    },
    avatarText: {
      color: '#fff',
      fontSize: 16,
    },
    changePhotoButton: {
      marginTop: 8,
      padding: 6,
    },
    changePhotoText: {
      color: '#00b894',
      fontSize: 14,
      fontWeight: '500',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    input: {
      height: 45,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 15,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    saveButton: {
      backgroundColor: '#00b894',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    debugSection: {
      marginTop: 30,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },
    debugTitle: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
  });
  
  export default styles;
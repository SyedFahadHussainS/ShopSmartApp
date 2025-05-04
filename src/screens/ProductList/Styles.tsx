import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    details: {
      flex: 1,
      paddingLeft: 10,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
    },
    price: {
      fontSize: 14,
      color: '#888',
      marginVertical: 4,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    button: {
      backgroundColor: '#00b894',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    buttonText: {
      color: '#fff',
    },
    quantityText: {
      fontSize: 16,
      fontWeight: '600',
      marginHorizontal: 10,
    },
    cartButton: {
      position: 'absolute',
      bottom: 15,
      left: 15,
      right: 15,
      backgroundColor: '#0984e3',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      elevation: 5,
    },
    cartButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    center: {
      marginTop: 50,
      alignItems: 'center',
    },
    retryButton: {
      backgroundColor: '#d63031',
      padding: 10,
      marginTop: 10,
      borderRadius: 6,
    },
    profileButton: {
      backgroundColor: '#2d3436',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 6,
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',
    },
    profileButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
    listContainer: {
      padding: 10,
      paddingBottom: 90, // Extra padding at bottom for the cart button
    },
  });
  
  export default styles;
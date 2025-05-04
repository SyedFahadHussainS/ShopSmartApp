import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 15,
    },
    cartItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginBottom: 15,
      padding: 15,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    imageContainer: {
      backgroundColor: '#e0e0e0',
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginRight: 15,
    },
    imagePlaceholder: {
      fontSize: 24,
      color: '#555',
      fontWeight: 'bold',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    itemPrice: {
      fontSize: 14,
      color: '#888',
      marginVertical: 5,
    },
    actionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    quantityButton: {
      backgroundColor: '#00b894',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 6,
      marginRight: 10,
    },
    quantityText: {
      fontSize: 16,
      fontWeight: '600',
      marginHorizontal: 10,
    },
    itemTotalPrice: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 15,
      color: '#333',
    },
    removeButton: {
      backgroundColor: '#e74c3c',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    removeButtonText: {
      color: '#fff',
      fontSize: 14,
    },
    totalContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      padding: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    checkoutButton: {
      backgroundColor: '#0984e3',
      paddingVertical: 10,
      marginTop: 10,
      borderRadius: 6,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    emptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    emptyCartText: {
      fontSize: 18,
      color: '#888',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles
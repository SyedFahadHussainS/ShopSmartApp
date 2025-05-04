import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/Slices/CartSlices';
import styles from './CartStyles';

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate the total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <View style={styles.imageContainer}>
              <Text style={styles.imagePlaceholder}>{item.title[0]}</Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>

              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => dispatch(decreaseQuantity(item.id))}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantityText}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => dispatch(increaseQuantity(item.id))}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <Text style={styles.itemTotalPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => dispatch(removeFromCart(item.id))}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

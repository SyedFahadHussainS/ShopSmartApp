import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/Slices/CartSlices';
import {toggleWishlist} from '../../redux/Slices/WishListSlices';
import {RootState} from '../../redux/store';

const ProductCard = ({item}: {item: any}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.ids);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isInWishlist = wishlist.includes(item.id);
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>

        <View style={styles.actions}>
          {quantity > 0 ? (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(decreaseQuantity(item.id))}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantity}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(increaseQuantity(item.id))}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(addToCart(item))}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isInWishlist ? '#ffcccc' : '#e0e0e0'},
            ]}
            onPress={() => dispatch(toggleWishlist(item.id))}>
            <Text style={[styles.buttonText, {color: 'black'}]}>
              {isInWishlist ? '♥ Remove' : '♡ Wishlist'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

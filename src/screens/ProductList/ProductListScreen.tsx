import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {
  ProfileButton,
  CartButton,
  Loader,
  ProfileHeader,
} from '../ProfileScreen/Components';
import {removeProfile} from '../../redux/Slices/ProfileSlices';
import styles from './Styles';
import ProductCard from './ProductCard';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`,
      );

      const formatted = response.data.products.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.thumbnail,
      }));

      setProducts((prev: any) => {
        const existingIds = new Set(prev.map(p => p.id));
        const uniqueNewProducts = formatted.filter(p => !existingIds.has(p.id));
        return [...prev, ...uniqueNewProducts];
      });

      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prev => prev + 1);
    }
  };

  if (loading && page === 1)
    return <ActivityIndicator size="large" style={{marginTop: 30}} />;
  if (error)
    return (
      <View style={styles.center}>
        <Text>Failed to load products</Text>
        <TouchableOpacity onPress={fetchProducts} style={styles.retryButton}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  const handleLogout = () => {
    dispatch(removeProfile());
  };
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      {profile?.name ? (
        <>
          <ProfileHeader
            name={profile.name}
            avatarUri={profile.avatarUri}
            onProfilePress={() => navigation.navigate('Profile')}
            handleLogout={handleLogout}
          />
         
        </>
      ) : (
        <ProfileButton onPress={() => navigation.navigate('Profile')} />
      )}

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <ProductCard item={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Loader /> : null}
      />

      {/* Cart Button */}
      {cartItems.length > 0 && (
        <CartButton
          onPress={() => navigation.navigate('Cart')}
          itemCount={cartItems.length}
        />
      )}
    </View>
  );
};

export default ProductListScreen;

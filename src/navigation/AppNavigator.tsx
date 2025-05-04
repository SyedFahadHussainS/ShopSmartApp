import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductList/ProductListScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Define the types for our stack navigator
type RootStackParamList = {
  ProductList: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

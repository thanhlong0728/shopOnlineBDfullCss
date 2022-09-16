import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../contains';
import MyTabs from './index';
import 'react-native-gesture-handler';
import {
  CartScreen,
  FillterScreen,
  ProductScreen,
  BuyScreen,
  SearchScreen,
} from '../screens';
import {HeaderScreen} from '../components';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const TabStackScreen = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FillterScreen"
        component={FillterScreen}
        options={{
          header: () => (
            <HeaderScreen product right={false} name={'Lọc sản phẩm'} />
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          header: () => (
            <HeaderScreen product right={false} name={'Giỏ hàng'} />
          ),
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{header: () => <HeaderScreen product />}}
      />
      <Stack.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={{
          header: () => (
            <HeaderScreen product right={false} name={'Xác nhận đơn hàng'} />
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{header: () => <HeaderScreen right={false} />}}
      />
    </Stack.Navigator>
  );
};

export default TabStackScreen;

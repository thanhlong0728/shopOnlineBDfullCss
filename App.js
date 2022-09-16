import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStackScreen from './app/navigation/TabNavigation';
import {DrawerContent} from './app/screens';

const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

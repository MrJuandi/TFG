import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen.js';
import { TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
          backgroundColor: '#727D73',
          },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text style={{ color: '#fff', paddingLeft: 10 }}>☰</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
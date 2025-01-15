import 'react-native-gesture-handler';  // Importación necesaria para que los gestos funcionen correctamente.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importar el contenedor de navegación.
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importar el Drawer Navigator.
import { View, Text } from 'react-native'; // Importar componentes básicos.

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
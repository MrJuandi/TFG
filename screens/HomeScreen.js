import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>Welcome to the Home Screen!</Text>
      {/* Resto del contenido */}
    </View>
  );
};

export default HomeScreen;
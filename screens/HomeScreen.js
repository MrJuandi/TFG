import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import styles from '../styles/styles';

const HomeScreen = () => {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ELECTRO</Text>
      <View style={styles.roundedContainer}>
        {/* Contenido del contenedor redondeado */}
      </View>
      <Text style={styles.body}>Welcome to the Home Screen!</Text>
      <View style={styles.rowContainer}>
        <View style={styles.squareContainer}></View>
        <View style={styles.squareContainer}></View>
      </View>
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsCollapsed1(!isCollapsed1)}
      >
        <Text style={styles.accordionHeaderText}>Desplegable 1</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Collapsible collapsed={isCollapsed1}>
        <View style={styles.accordionContent}>
          <Text>Contenido del desplegable 1</Text>
        </View>
      </Collapsible>
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsCollapsed2(!isCollapsed2)}
      >
        <Text style={styles.accordionHeaderText}>Desplegable 2</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Collapsible collapsed={isCollapsed2}>
        <View style={styles.accordionContent}>
          <Text>Contenido del desplegable 2</Text>
        </View>
      </Collapsible>
      <View style={styles.separator} />
    </View>
  );
};

export default HomeScreen;
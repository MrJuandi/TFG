import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40, // Añadir padding superior
    width: '100%', // Asegurar que el contenedor ocupe todo el ancho
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    position: 'absolute', // Posicionar absolutamente
    top: 40, // Distancia desde arriba
    textAlign: 'center', // Centrar el texto
    width: '100%', // Asegurar que el texto esté centrado
  },
  roundedContainer: {
    width: '80%',
    padding: 60,
    backgroundColor: '#AAB99A',
    borderRadius: 15, // Esquinas redondeadas
    alignItems: 'center',
    marginTop: 80, // Ajustar según sea necesario
  },
  body: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 40,
  },
  squareContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#D0DDD0',
    borderRadius: 15, // Esquinas redondeadas
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30, // Espacio entre los contenedores
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Asegurar que los contenedores estén alineados verticalmente
    marginTop: 20, // Más espacio entre el contenedor redondeado y los cuadrados
  },
  accordionHeader: {
    backgroundColor: '#F0F0D7',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  accordionHeaderText: {
    
    fontSize: 18,
    color: '#000',
  },
  accordionContent: {
    padding: 15,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  separator: {
    height: 0.2, // Hacer la línea más delgada
    backgroundColor: '#000',
    width: '100%',
  },
});
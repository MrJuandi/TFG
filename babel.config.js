module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',   // Si estás usando reanimated
    ['@babel/plugin-transform-class-properties', { loose: true }],  // Establecer loose en true
    ['@babel/plugin-transform-private-methods', { loose: true }],  // Establecer loose en true
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]  // Establecer loose en true
  ],
};
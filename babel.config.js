module.exports = {
  // presets: ['module:@react-native/babel-preset'],
  presets: [
    'module:@react-native/babel-preset',
    'module:metro-react-native-babel-preset',
    // '@babel/preset-env',
    // '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};

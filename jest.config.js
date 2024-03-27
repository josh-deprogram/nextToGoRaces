module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': [
  //     'ts-jest',
  //     {
  //       transformerConfig: {
  //         // transformIgnorePatterns: [
  //         //   // '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  //         //   'jest-runner',
  //         // ],
  //       },
  //     },
  //   ],
  // },
  globals: {
    __DEV__: true,
  },
  testEnvironment: 'react-native',
};

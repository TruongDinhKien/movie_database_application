module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          "components": './src/components',
          "assests": './src/assests',
          "cores": './src/components/cores/index.ts',
          "screens": './src/screens/index.ts',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [[
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Navigation from 'components/navigator/Navigator';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import Theme from 'theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={'dark-content'} backgroundColor="white" />
          <AppContent />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider >
  );
}

function AppContent() {

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
});

export default App;

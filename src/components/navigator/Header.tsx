import { AppImage } from 'components/cores';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Theme from 'theme';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'right', 'left']}>
      <View style={styles.container}>
        <AppImage source={require('assests/Logo.png')} resizeMode='contain' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.white,
  },
  container: {
    margin: Theme.spacing.space_2,
    backgroundColor: Theme.colors.white,
    height: 56,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;

import React, { useState } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import Theme from 'theme';

interface AppImageProps extends ImageProps {
  source: ImageProps['source'];
  placeholderStyle?: any;
}

const AppImage: React.FC<AppImageProps> = ({ source, style, placeholderStyle, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isRemote = typeof source === 'object' && source !== null && 'uri' in source;
  console.log(isLoading , hasError,'isRemote');
  if (isLoading || hasError) {
    return (
      <View style={[styles.placeholder, style, placeholderStyle]}>
        <AppText i18nKey={hasError ? "image_load_error" : "loading_image"} />
      </View>
    );
  }

  return (
    <Image
      source={source}
      style={style}
      onLoadStart={() => isRemote && setIsLoading(true)} 
      onLoadEnd={() => setIsLoading(false)} 
      onError={() => { 
        setIsLoading(false); 
        setHasError(true); 
      }}
      resizeMode="contain"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: Theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppImage;
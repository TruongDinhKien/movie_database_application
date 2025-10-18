import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import AppText from './AppText';
import Theme from 'theme';

interface AppInputProps {
  labelKey?: string; 
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const AppInput: FC<TextInputProps & AppInputProps> = ({
  labelKey,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {labelKey && (
        <AppText i18nKey={labelKey} style={styles.label} />
      )}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={Theme.colors.border}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Theme.spacing.space_1,
  },
  label: {
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.secondary_dark,
    marginBottom: Theme.rounds.small,
    fontWeight: Theme.fontWeights.semiBold,
  },
  input: {
    height: 50,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.rounds.medium,
    borderRadius: Theme.rounds.small,
    fontSize: Theme.fontSizes.medium,
    color: Theme.colors.black,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
});

export default AppInput;
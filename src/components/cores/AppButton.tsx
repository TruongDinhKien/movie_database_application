import React, { FC } from 'react';
import AppText from './AppText';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Theme from 'theme';

interface AppButtonProps {
  i18nKey: string;
  variant?: TVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: any;
}

const AppButton: FC<TouchableOpacityProps & AppButtonProps> = ({
  i18nKey,
  style = [],
  variant,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        variant && { backgroundColor: Theme.colors[variant] },
        style,
      ]}
      {...props}
    >
      <AppText
        i18nKey={i18nKey}
        style={{
          color:
            variant === 'primary' ? Theme.colors.white : Theme.colors.black,
          ...(textStyle || {})
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {},
});

export default AppButton;

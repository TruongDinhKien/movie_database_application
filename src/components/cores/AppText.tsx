import React from 'react';
import {
  TextProps as RNTextProps,
  TextStyle,
  StyleSheet,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Theme, { FontSize } from 'theme';

interface AppTextProps extends RNTextProps {
  style?: TextStyle;
  tOptions?: object;
  children?: React.ReactNode;
  text?: never;
  i18nKey: string;
  variant?: TVariant;
  size?: FontSize;
}

const AppText: React.FC<AppTextProps> = ({
  text,
  i18nKey,
  style,
  children,
  variant,
  size,
  ...restProps
}) => {
  const { t } = useTranslation();
  const content = i18nKey ? t(i18nKey) : text;
  const finalContent = content ?? children ?? '';

  return (
    <Text
      style={[
        styles.text,
        style,
        variant && { color: Theme.colors[variant] },
        size && { fontSize: Theme.fontSizes[size] },
      ]}
      {...restProps}
    >
      {finalContent}
    </Text>
  );
};

export const styles = StyleSheet.create({
  text: {
    fontSize: Theme.fontSizes.base,
    color: Theme.colors.black,
  },
});

export default AppText;

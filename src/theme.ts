export const colors = {
  primary: '#00B4E4',
  secondary: '#F5F5F5',
  secondary_dark: '#00000080',
  tertiary: '#042541',
  white: '#FFFFFF',
  black: '#000000',
};

export const rounds = {
  small: 5,
  medium: 10,
  large: 20,
  xLarge: 40,
};

export const fontSizes = {
  xSmall: 10,
  small: 12,
  base: 14,
  medium: 16,
  large: 18,
  xLarge: 22,
  title: 28,
};

export type FontSize = keyof typeof fontSizes;

export const fontWeights = {
  light: '300' as const,
  regular: '400' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};

export const theme = {
    colors,
    rounds,
    fontSizes,
    fontWeights,
};

export default theme;
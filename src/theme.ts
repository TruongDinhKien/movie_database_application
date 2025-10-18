const colors = {
  primary: '#00B4E4',
  secondary: '#F5F5F5',
  secondary_dark: '#00000080',
  tertiary: '#042541',
  white: '#FFFFFF',
  black: '#000000',
  border: "#E3E3E3"
};

const rounds = {
  xSmall: 2,
  small: 5,
  medium: 10,
  large: 20,
  xLarge: 40,
};

const fontSizes = {
  xSmall: 10,
  small: 12,
  base: 14,
  medium: 16,
  large: 18,
  xLarge: 22,
  title: 28,
};


const fontWeights = {
  light: '300' as const,
  regular: '400' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};

const spacing = {
  space_0: 0,
  space_0_5: 2,
  space_1: 4,
  space_2: 8,
  space_3: 12,
  space_4: 16,
  space_5: 20,
}

export const theme = {
  colors,
  rounds,
  fontSizes,
  fontWeights,
  spacing
};

export type FontSize = keyof typeof fontSizes;

export default theme;
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      base: string;
      tint5: string;
      tint10: string;
      tint20: string;
      tint30: string;
      tint40: string;
      shade60: string;
      shade70: string;
      shade80: string;
      shade90: string;
      black: string;
      grey5: string;
      grey10: string;
      grey20: string;
      grey30: string;
      grey40: string;
      grey50: string;
      grey60: string;
      grey70: string;
      grey75: string;
      grey80: string;
      grey90: string;
      grey100: string;
    };
    fontSize: {
      large: string;
      medium: string;
      small: string;
      small_detail: string;
    };
    fonts: {
      regular: string;
    };
    lineHeight: string;
  }
}

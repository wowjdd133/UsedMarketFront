import theme from '../styles/theme';

type ThemeInterface = typeof theme;

declare module "styled-components/native" {
    interface DefaultTheme extends ThemeInterface {}
}
import { ICustomTheme } from './customTheme'

interface ICustomTheme {
  colors: {
    bodyBackground: string
    bodyText: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ICustomTheme {}
}

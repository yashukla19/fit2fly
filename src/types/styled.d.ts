import { ICustomTheme } from './customTheme'

interface ICustomTheme {
  colors: {
    bodyBackground: string
    bodyText: string
    borderColorStandard: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ICustomTheme {}
}

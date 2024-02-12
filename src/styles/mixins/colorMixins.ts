import { DefaultTheme } from 'styled-components'

const bodyBackgroundColor = (theme: DefaultTheme) => {
  return `
    background-color: ${theme.colors.bodyBackground};
   `
}

const bodyTextColor = (theme: DefaultTheme) => {
  return `
    color: ${theme.colors.bodyText};
   `
}

const headerBackground = (theme: DefaultTheme) => {
  return `
    background-color: ${theme.colors.headerBackground};
   `
}

const leftNavBackground = (theme: DefaultTheme) => {
  return `
    background-color: ${theme.colors.leftNavBackground};
   `
}

export { bodyBackgroundColor, headerBackground, leftNavBackground, bodyTextColor }

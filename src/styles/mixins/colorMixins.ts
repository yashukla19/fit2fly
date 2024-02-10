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

export { bodyBackgroundColor, bodyTextColor }

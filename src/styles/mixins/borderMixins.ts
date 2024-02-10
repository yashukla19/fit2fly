import { DefaultTheme } from 'styled-components'

const border = (theme: DefaultTheme) => {
  return `
    border: 1px solid ${theme.colors.borderColorStandard};
   `
}

const borderRound = () => {
  return `
    border-radius: 3px;
   `
}

export { border, borderRound }

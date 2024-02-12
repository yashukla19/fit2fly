import { bodyBackgroundColor, flex1, padding, headerBackground, leftNavBackground } from '../../../src/styles/mixins'
import { DefaultTheme } from 'styled-components'

const standardPadding = padding(10, 10, 10, 10)

const headerStyles = (theme: DefaultTheme) => {
  return `
  ${headerBackground(theme)}
  ${standardPadding}
`
}

const sidebarStyles = (theme: DefaultTheme) => {
  return `
  ${leftNavBackground(theme)}
  ${standardPadding}
  height: 100vh; // Full height of the viewport
  ${flex1()}
  padding-top: 56px;
`
}

const mainContentStyles = (theme: DefaultTheme) => {
  return `
  ${bodyBackgroundColor(theme)}
  ${standardPadding}
  height: 100vh; // Full height of the viewport
  ${flex1()}
  padding-top: 56px;
`
}

export { headerStyles, sidebarStyles, mainContentStyles }
import { bodyBackgroundColor, padding, headerBackground, leftNavBackground } from '../../../src/styles/mixins'
import { DefaultTheme } from 'styled-components'

const standardPadding = padding(10, 10, 10, 10)
const headerHeight = "56px"

const headerStyles = (theme: DefaultTheme) => {
  return `
  ${headerBackground(theme)}
  ${standardPadding}
  height: ${headerHeight};
`
}

const sidebarStyles = (theme: DefaultTheme) => {
  return `
  ${leftNavBackground(theme)}
  ${standardPadding}
  height: calc(100vh - ${headerHeight});
  overflow-y: auto;
`
}

const mainContentStyles = (theme: DefaultTheme) => {
  return `
  ${bodyBackgroundColor(theme)}
  ${standardPadding}
  height: calc(100vh - ${headerHeight});
  overflow-y: auto;
`
}

export { headerStyles, sidebarStyles, mainContentStyles }
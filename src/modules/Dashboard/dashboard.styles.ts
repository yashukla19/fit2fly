import { bodyBackgroundColor, flex, flex1, flexShrink0, flexDirectionColumn, padding, headerBackground, leftNavBackground } from '../../../src/styles/mixins'
import { DefaultTheme } from 'styled-components'

const standardPadding = padding(10, 10, 10, 10)

const dashboardStyles = (theme: DefaultTheme) => {
    return `
        ${flex()}
        ${flexDirectionColumn()}
          height: 100vh; 
          width: 100vw; 
          overflow: hidden;

          & > .dashboardHeader {
            ${standardPadding}
            height: 50px;
            ${headerBackground(theme)}
            box-sizing: border-box;
          }

          & > .dashboardContent {
            ${flex()}
            ${flex1()}
            overflow: hidden;

            & > .dashboardLeftNav {
                ${flex()}
                ${flexDirectionColumn()}
                ${standardPadding}
                ${leftNavBackground(theme)}
                width: 200px;
                overflow-y: auto;
                ${flexShrink0()}
            }

            & > .dashboardMainArea {
                ${standardPadding}
                ${bodyBackgroundColor(theme)}
                ${flex1()}
                overflow-y: auto;
            }
          }
          `;
}

export { dashboardStyles }
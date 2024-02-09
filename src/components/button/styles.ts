import { border, borderRound, padding, bodyBackgroundColor, bodyTextColor, margin } from '../../styles/mixins'
import { ButtomVariants } from '../../constants/domConstants'
import { DefaultTheme } from 'styled-components'

const buttonStyles = (theme: DefaultTheme, variant?: ButtomVariants) => {
  return `
          ${bodyBackgroundColor(theme)}
          ${bodyTextColor(theme)}
          ${border(theme)}
          ${borderRound()}
          ${variant ? getVariantPaddingStyles(variant) : ""}
          ${margin(0, 3, 0, 0)}
          `
}

const getVariantPaddingStyles = (variant: ButtomVariants) => {
  switch (variant) {
    case ButtomVariants.xs:
      return `
        ${padding(3, 5, 3, 5)}
      `
    case ButtomVariants.s:
      return `
      ${padding(5, 8, 5, 8)}
      `
    case ButtomVariants.m:
      return `
      ${padding(8, 12, 8, 12)}
      `
    case ButtomVariants.l:
      return `
      ${padding(12, 15, 12, 15)}
      `
    case ButtomVariants.xl:
      return `
        ${padding(15, 18, 15, 18)}
        `
    default:
      return `
      ${padding(5, 8, 5, 8)}
      `
  }
}

export { buttonStyles }

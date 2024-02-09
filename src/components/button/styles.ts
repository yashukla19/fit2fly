import { ButtomSizes } from '../../constants/domConstants'
import { DefaultTheme } from 'styled-components'

const buttonStyles = (theme: DefaultTheme, variant?: ButtomSizes) => {
  return `
          background-color: ${theme.colors.bodyBackground};
          color: ${theme.colors.bodyText};
          margin-right: 2px;
          ${variant ? getVariantPaddingStyles(variant) : ""}
          `
}

const getVariantPaddingStyles = (variant: ButtomSizes) => {
  switch (variant) {
    case ButtomSizes.xs:
      return `
        padding: 2px 5px;
      `
    case ButtomSizes.s:
      return `
        padding: 5px 8px;
      `
    case ButtomSizes.m:
      return `
        padding: 8px 12px;
      `
    case ButtomSizes.l:
      return `
        padding: 12px 20px;
      `
      case ButtomSizes.xl:
        return `
          padding: 15px 30px;
        `
    default:
      return `
        padding: 8px 12px;
      `
  }
}

export { buttonStyles }

import { ButtomVariants } from '../../constants/domConstants'
import { buttonStyles } from './styles'
import { styled } from 'styled-components'

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  variant?: ButtomVariants
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return <button className={className}>{children}</button>
}

const Button = styled(ButtonComponent)`
  ${({ theme, variant }) => buttonStyles(theme, variant)};
`

export default Button

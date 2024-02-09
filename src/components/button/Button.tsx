import { ButtomSizes } from '../../constants/domConstants'
import { buttonStyles } from './styles'
import { styled } from 'styled-components'

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  variant?: ButtomSizes
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return <button className={className}>{children}</button>
}

const ButtonComponent = styled(Button)`
  ${({ theme, variant }) => buttonStyles(theme, variant)};
`

export default ButtonComponent

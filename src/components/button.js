import styled,{css} from 'styled-components'
import theme from 'components/theme'

const style = {
  secondary: css`
    color: ${theme.color.primary.medium}
  `
}

const Button = styled.a`
  padding: 1em 1.5em;
  background: ${props => props.theme.color.primary.default};
  border: 2px solid ${props => props.theme.color.primary.lighten};
  color: ${props => props.type === 'primary' ? 'white' : props.theme.color.primary.default};
  display: inline-block;
  border-radius: 3px;
  font-size: ${props => props.theme.paragraph.secondary.fontSize};
  font-weight: ${props => props.theme.paragraph.bold.weight};
  letter-spacing: .02em;
`

Button.defaultProps = {
  type: 'primary'
}

export default Button
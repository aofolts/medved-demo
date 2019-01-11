import styled from 'styled-components'

const Button = styled.a`
  padding: 1em 1.5em;
  background: ${props => props.theme.color.primary.default};
  color: white;
  display: inline-block;
  border-radius: 3px;
  font-size: ${props => props.theme.paragraph.secondary.fontSize};
  font-weight: ${props => props.theme.paragraph.bold.weight};
  letter-spacing: .02em;
`

export default Button
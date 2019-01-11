import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 6.2rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
`

export const Heading = styled.h2`
  font-size: 3.6rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
`

export const Body = styled.p`
  color: ${props => props.theme.color.grey.darker};
  font-size: 1.8rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 400;
  line-height: ${props => props.theme.lineHeight.normal};
  margin-bottom: 1em;
`
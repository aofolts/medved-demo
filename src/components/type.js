import styled from 'styled-components'
import theme from 'components/theme'
import React from 'react'
import Icon from 'components/icon'

export const Title = styled.h1`
  font-size: 6.2rem;
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 600;
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => props.theme.padding.small};
`

export const Heading = styled.h2`
  font-size: ${props => Heading.styles.fontSize[props.level]};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: ${props => Heading.styles.fontWeight[props.level]};
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: ${props => Heading.styles.margin.bottom[props.level]};
`

Heading.styles = {
  fontSize: {
    2: '3.6rem',
    3: '2.5rem'
  },
  fontWeight: {
    2: 600,
    3: 500
  },
  margin: {
    bottom: {
      2: theme.margin.bottom.small,
      3: theme.margin.bottom.small
    }
  }
}

Heading.defaultProps = {
  level: 2
}

export const paragraphStyles = {
  fontSize: {
    1: '2rem',
    2: '1.8rem',
    3: '1.6rem'
  }
}

export const Paragraph = styled.p`
  color: ${props => props.scheme === 'reverse' 
    ? 'white' 
    : props.theme.color.grey.darker};
  font-size: ${props => paragraphStyles.fontSize[props.level]};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: 400;
  line-height: ${props => props.theme.lineHeight.normal};
  margin-bottom: 1em;
`

Paragraph.defaultProps = {
  level: 1
}

const ArrowContainer = styled.div`
  display: inline-block;
  width: 2em;
  height: .66em;
`

export default ArrowContainer

const UnstyledArrowIcon = ({
  className
}) => {
  return (
    <Icon name='arrow' className={className}/>
  )
}

const Arrow = styled(UnstyledArrowIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%; 

  line, polyline {
    stroke: red;
    stroke-width: 3px;
    fill: none;
  }
`

const UnstyledActionLink = ({
  className,
  children
}) => {
  return (
    <a className={className}> 
      <div style={{display: 'inline-block'}}>{children}</div>
      <ArrowContainer>
        <Arrow/>
      </ArrowContainer>
    </a>
  )
}

export const ActionLink = styled(UnstyledActionLink)`
  color: ${props => props.theme.color.primary.default};
  font-size: ${paragraphStyles.fontSize[2]};
  font-weight: 500;
  display: inline-block;
  stroke: red;
`
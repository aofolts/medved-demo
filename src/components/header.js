import React from 'react'
import styled from 'styled-components'
import {withAppContext} from 'components/layout'

const UnstyledHeader = ({
  children,
  className
}) => {
  return (
    <header id='header' className={className}>
      {children}
    </header>
  )
}

const Header = styled(UnstyledHeader)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.navigation};
  border-bottom: 2px solid ${props => props.theme.color.red.light};
`

export default withAppContext(Header)
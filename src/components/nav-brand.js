import React from 'react'
import styled from 'styled-components'
import Icon from 'components/icon'

const Logo = styled(Icon)`
  width: 12.5rem;
`

const UnstyledBrand = ({
  className
}) => {
  return (
    <div id='nav-main-brand' className={className}>
      <Logo name='logo-red'/>
    </div>
  )
}

const Brand = styled(UnstyledBrand)`
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
`

export default Brand
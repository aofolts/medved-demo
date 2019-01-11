import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import theme from './theme'

const UnstyledLayout = ({
  children,
  className
}) => {
  return (
    <div id='layout' className={className}>
      <ThemeProvider theme={theme} className={className}>
        {children}
      </ThemeProvider>
    </div>
  )
}

const Layout = styled(UnstyledLayout)`
  font-family: ${theme.font.family.primary};
`

export default Layout
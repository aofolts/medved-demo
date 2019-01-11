import React from 'react'
import styled from 'styled-components'
import {Heading,Body} from 'components/type'

const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  width: ${props => props.theme.columns(6)};
`

const UnstyledSection = ({
  className
}) => {
  return (
    <section id='intro' className={className}>
      <Content>
        <Heading>Rochester’s friendly running and walking store since 1984</Heading>
        <Body>Cras non dolor. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis.</Body>
      </Content>
    </section>
  )
}

const Section = styled(UnstyledSection)`
  padding: ${props => props.theme.padding.default};
`

export default Section
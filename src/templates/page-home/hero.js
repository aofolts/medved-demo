import React from 'react'
import styled from 'styled-components'
import {Title} from 'components/type'
import Button from 'components/button'
import imgSrc from './women-racing.jpeg'

const Container = styled.div`
  background: ${props => props.theme.color.grey.lightest};
  padding: ${props => props.theme.padding.default};
`

const Content = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};

  @media screen and (min-width: 100rem) {
    display: flex;
    align-items: center;
  }
`

const Text = styled.div`
  width: ${props => props.theme.container.height.tall}
  max-width: 100%;
  flex: 1;
`

const Copy = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.color.grey.medium};
`

const Media = styled.div`
  display: block;
  width: ${props => props.theme.columns(4)};
  max-width: 100%;
  height: ${props => props.theme.columns(5)};
  background: grey;

  @media screen and (min-width: 100rem) {
    margin-left: calc(${props => props.theme.padding.large} * 2);
  }
`

const Image = styled.img.attrs({
  src: imgSrc
})`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Hero = () => {
  return (
    <Container>
      <Content>
        <Text>
          <Title>Happy 2019, ya'll. Let's get moving!</Title>
          <Copy>Looking to get out on the trails? Have your heart set on a new 5K PR? We’ve got groups for you! Come run with us (we might even grab pizza afterwards).</Copy>
          <Button>Join a training group</Button>
        </Text>
        <Media>
          <Image/>
        </Media>
      </Content>
    </Container>
  )
} 

export default Hero
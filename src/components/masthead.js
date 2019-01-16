import React,{Component,Context} from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import Nav from 'components/nav'
import Brand from 'components/nav-brand'
import MainMenu from 'components/menu-main'
import {withAppContext} from 'components/layout';

class UnstyledMasthead extends Component {
  render() {
    const {
      className
    } = this.props

    return (
      <div id='masthead' className={className}>
        <Header>
          <Nav>
            <Brand/>
            <MainMenu/>
          </Nav>
        </Header>
      </div>
    )
  }
}

const Masthead = styled(UnstyledMasthead)`
  display: block;
  height: ${props => props.theme.padding.large};
  background: ${props => props.theme.color.red.lightest};
`

export default withAppContext(Masthead)
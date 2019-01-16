import React,{createContext,Component} from 'react'
import styled,{ThemeProvider} from 'styled-components'
import theme from './theme'
import Masthead from 'components/masthead'

const AppContext = createContext()

export function withAppContext(Component) {
  return props => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context}/>}
    </AppContext.Consumer>
  )
}

class UnstyledLayout extends Component {
  state = {
    header: {
      isDocked: null,
      height: null
    },
    nav: {
      height: null 
    }
  }

  checkHeaderState = () => {
    const pageYOffset  = window.pageYOffset,
          header       = document.querySelector('#header'),
          headerHeight = header.offsetHeight

    let isDocked = this.state.header.isDocked

    if (pageYOffset === 0 && !isDocked) {
      this.setState({
        header: {
          isDocked: true,
          height: headerHeight
        },
        nav: {
          height: theme.padding.large
        }
      })
    } else if (pageYOffset > 0 && isDocked) {
      this.setState({
        header: {
          isDocked: false,
          height: headerHeight
        },
        nav: {
          height: theme.padding.medium
        }
      })
    }
  }

  componentDidMount() {
    this.checkHeaderState()

    window.addEventListener('scroll',this.checkHeaderState)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll',this.checkHeaderState)
  }

  render() {
    const {
      children,
      className
    } = this.props

    const context = {
      ...this.state,
    }

    return (
      <AppContext.Provider value={context}>
          <ThemeProvider theme={theme} className={className}>
            <div id='layout' className={className}>
              <Masthead/>
              {children}
            </div>
          </ThemeProvider>
      </AppContext.Provider>
    )
  }
}

const Layout = styled(UnstyledLayout)`
  font-family: ${theme.font.family.primary};
`

export default Layout
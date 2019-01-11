const theme = {
  color: {
    primary: {
      default: '#E35040'
    },
    grey: {
      lightest: '#FAF5F5',
      lighter: '#F5F0F0',
      lighten: '#BFBBBB',
      medium: '#807473',
      darker: '#3F1512',
      darkest: '#33110F'
    }
  },
  container: {
    height: {
      tall: 650
    },
    width: {
      medium: 1000,
      main: 1300
    }
  },
  font: {
    family: {
      primary: "'Poppins',sans-serif"
    }
  },
  lineHeight: {
    small: '1.2em',
    normal: '1.5em'
  },
  padding: {
    small: '2.5rem',
    medium: '5rem',
    mediumLarge: '7.5rem',
    large: '10rem'
  },
  paragraph: {
    weight: 300,
    fontSize: '1.8rem',
    margin: {
      bottom: '1em'
    },
    bold: {
      weight: 400
    },
    secondary: {
      fontSize: '1.6rem'
    }
  }
}

theme.columns = num => (theme.container.width.main / 120) * num + 'rem'

theme.heading = {
  tertiary: {
    size: '2.6rem',
    weight: 500
  }
}

theme.padding.default = `
  ${theme.padding.large} ${theme.padding.small}
`

export default theme
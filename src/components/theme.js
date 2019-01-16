const theme = {
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
  margin: {
    bottom: {
      small: '.5em',
      medium: '1em'
    }
  },
  padding: {
    small: '2.5rem',
    medium: '5rem',
    mediumLarge: '7.5rem',
    large: '10rem'
  },
  paragraph: {
    weight: 300,
    fontSize: '2rem',
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

theme.color = {
  red: {
    lightest: '#FAF5F5',
    lighter: '#F5F0F0',
    light: '#F5E6E6',
    lighten: '#F0AFA8',
    default: '#E35040'
  },
  blue: {
    lightest: '#F5F7FA',
    lighter: '#EBEFF5'
  },
  grey: {
    lightest: '#FAF5F5',
    lighter: '#F5F0F0',
    lighten: '#BFBBBB',
    medium: '#807473',
    darker: '#3F1512',
    darkest: '#33110F'
  }
}

theme.color.primary = theme.color.red

theme.columns = num => (theme.container.width.main / 120) * num + 'rem'

theme.heading = {
  tertiary: {
    size: '2.6rem',
    weight: 500
  }
}

theme.icon = {
  size: {
    large: '15rem'
  }
}

theme.padding.default = `
  ${theme.padding.large} ${theme.padding.small}
`

theme.zIndex = {
  navigation: 1000
}

theme.text = {
  small: '1.6rem',
  mediumSmall: '1.8rem',
  medium: '2rem',
  mediumLarge: '2.4rem',
  large: '3.6rem',
  extraLarge: '6.5rem'
}

export default theme
import {
  blackAlpha,
  blue,
  gray,
  green,
  orange,
  pink,
  purple,
  red,
  teal,
  whiteAlpha,
  yellow,
} from './colors'

type ThemeColors = {
  primary: string
  primarySubtle: string
  primaryHighlight: string

  secondary: string
  secondarySubtle: string
  tertiary: string

  background: string
  backgroundLayer2: string
  backgroundLayer3: string
  backgroundDisabled: string

  text: string
  textContrast: string
  textSubtle: string
  textHighlight: string
  textDisabled: string

  success: string
  warn: string

  borderColor: string
  borderColorPrimary: string

  shadowColor: string
  shadowColorHighlight: string
  // modal overlay
  overlayColor: string
  // For table
  tableOddRowColor: string
  tableEvenRowColor: string
  tableHoverRowColor: string
  // For interactive element

  facebookBlue: string
  textSub: string
  publishSuccess: string
}
export const lightThemeColors: ThemeColors = {
  primary: blue[500],
  primarySubtle: blue[400],
  primaryHighlight: blue[600],

  secondary: pink[500],
  secondarySubtle: pink[400],
  tertiary: yellow[500],

  background: 'white',
  backgroundLayer2: gray[50],
  backgroundLayer3: gray[100],
  backgroundDisabled: gray[200],

  text: gray[900],
  textContrast: 'white',
  textSubtle: gray[600],
  textHighlight: purple[500],
  textDisabled: gray[200],

  borderColor: gray[600],
  borderColorPrimary: blue[700],
  shadowColor: blackAlpha[100],
  shadowColorHighlight: blackAlpha[50],

  success: green[500],
  warn: red[500],

  overlayColor: blackAlpha[500],
  tableOddRowColor: 'white',
  tableEvenRowColor: gray[200],
  tableHoverRowColor: gray[400],

  // constants
  facebookBlue: '#1877f2',
  textSub: gray[500],
  publishSuccess: green[200],
}

export const darkThemeColors: ThemeColors = {
  primary: orange[500],
  primarySubtle: orange[600],
  primaryHighlight: orange[400],

  secondary: teal[500],
  secondarySubtle: teal[600],
  tertiary: purple[500],

  background: gray[900],
  backgroundLayer2: gray[800],
  backgroundLayer3: gray[700],
  backgroundDisabled: gray[600],

  text: 'white',
  textContrast: gray[900],
  textSubtle: yellow[300],
  textHighlight: teal[500],
  textDisabled: gray[300],

  success: green[400],
  warn: red[400],

  borderColor: gray[300],
  borderColorPrimary: orange[300],
  shadowColor: whiteAlpha[800],
  shadowColorHighlight: whiteAlpha[700],

  overlayColor: blackAlpha[500],
  tableOddRowColor: gray[900],
  tableEvenRowColor: gray[800],
  tableHoverRowColor: gray[600],

  // constants
  facebookBlue: '#1877f2',
  textSub: gray[300],
  publishSuccess: green[400],
}

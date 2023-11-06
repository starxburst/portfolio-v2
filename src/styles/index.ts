import { createStitches, CSSProperties } from '@stitches/react'

import { darkThemeColors, lightThemeColors } from './colorTheme'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config: themeConfig,
} = createStitches({
  theme: {
    colors: lightThemeColors,
    fonts: {
      primary: "'Inter','Poppins', sans-serif",
    },

    fontSizes: {
      1: '0.5rem',
      2: '0.75rem',
      3: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      tiny: '0.7rem',
      small: '0.875rem',
      medium: '1rem',
      mediumLarge: '1.25rem',
      large: '1.5rem',
      veryLarge: '2rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      32: '8rem',
      64: '16rem',
      min: '4px',
      tabelCellPadding: '4px',
      tiny: '8px',
      small: '12px',
      medium: '16px',
      large: '24px',
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      32: '8rem',
      64: '16rem',
      small: '12px',
      medium: '16px',
      large: '24px',
    },
    radii: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      small: '0.25rem',
      medium: '0.5rem',
      large: '1rem',
      semiCircle: '1000px',
      round: '50%',
    },
    zIndices: {
      emoji: 900,
      randomEmoji: 910,
      navBar: 1000,
      modal: 1300,
      modalContent: 1310,
      selectPopup: 1320,
      tooltip: 1500,
      noti: 1600,
    },

    shadows: {
      1: `0 4px 6px $colors$shadowColor, 0 1px 3px $colors$shadowColorHighlight`,
      2: `0 5px 10px $colors$shadowColor, 0 2px 5px $colors$shadowColorHighlight`,
      3: `0 8px 16px $colors$shadowColor, 0 3px 6px $colors$shadowColorHighlight`,
      4: `0 12px 24px $colors$shadowColor, 0 4px 8px $colors$shadowColorHighlight`,
      5: `0 16px 32px $colors$shadowColor, 0 6px 12px $colors$shadowColorHighlight`,
      default: `0 4px 6px $colors$shadowColor, 0 1px 3px $colors$shadowColorHighlight`,
    },
  },
  media: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 768px)',
    md: '(max-width: 1024px)',
    lg: '(max-width: 1280px)',
    xl: '(min-width: 1281px)',
  },
  utils: {
    p: (value: CSSProperties['padding']) => ({
      padding: value,
    }),
    px: (value: CSSProperties['padding']) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: CSSProperties['padding']) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: CSSProperties['margin']) => ({
      margin: value,
    }),
    mx: (value: CSSProperties['margin']) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: CSSProperties['margin']) => ({
      marginTop: value,
      marginBottom: value,
    }),
    flexRowCenter: (value: CSSProperties['justifyContent']) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...(value ? { justifyContent: value } : {}),
    }),
    // eslint-disable-next-line unused-imports/no-unused-vars
    focusOutline: (color?: CSSProperties['color']) => {
      const finalColor = color || 'transparent'
      return {
        outline: `${finalColor} solid 2px`,
      }
    },
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: lightThemeColors,
})

export const darkTheme = createTheme('dark-theme', {
  colors: darkThemeColors,
})

export type ThemeConfig = typeof themeConfig

export const loadingSpinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

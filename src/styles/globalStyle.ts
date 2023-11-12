import { globalCss } from '.'

export const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap')",
  'html, body': {
    position: 'relative',
    zIndex: 0,
    padding: 0,
    margin: 0,
    fontSize: '16px',
    fontFamily: 'Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif',
    lineHeight: 1,
    height: '100%',
    minWidth: '100%',
    // minHeight: '100vh',
    scrollBehavior: 'smooth',
    /* Hide scrollbar for IE, Edge and Firefox */
    scrollbarWidth: 'none', /* For Firefox */
    msOverflowStyle: 'none', /* For Internet Explorer and Edge */
  },
  body: {
    backgroundColor: '$background',
    height: '100%',
    color: '$text',
    // overflow: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  div: {
    position: 'relative',
  },
  '#root': {
    minHeight: '100%',
    height: '100%',
    width: '100%',
    // minWidth: '1200px',
    padding: 0,
    margin: '0 auto',
    // overflow: 'auto',
  },
  '*': {
    boxSizing: 'border-box',
  },
})

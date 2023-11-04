import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { darkTheme } from '../styles'
import { darkModeState } from '../stores/darkMode'

const themeRoot = document.body

export const useDarkMode = () => {
  const isDarkMode = useRecoilValue(darkModeState)
  console.log('isDarkMode', isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      console.log('dark mode')
      themeRoot.classList.add(darkTheme)
    } else {
      themeRoot.classList.remove(darkTheme)
    }
  }, [isDarkMode])
}

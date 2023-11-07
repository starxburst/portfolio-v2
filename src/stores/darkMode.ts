import { atom } from 'recoil'

import { ATOM_KEY } from '../constants'
import { localStorageEffect } from './utils'

export const darkModeState = atom<boolean>({
  key: ATOM_KEY.DarkMode,
  default: true,
  effects: [localStorageEffect(ATOM_KEY.DarkMode)],
})

import { themes } from '@/constants/themes'
import { I_useTheme } from '@/types'
// import { useColorScheme } from 'react-native'

export const useTheme = (): I_useTheme => {
  const colorScheme = 'light' // useColorScheme()

  return {
    theme: colorScheme ? themes[colorScheme] : themes.light,
  }
}

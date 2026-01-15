import { themes } from '@/constants/themes'
import { I_useTheme } from '@/types'
// import { useColorScheme } from 'react-native'

export const useTheme = (): I_useTheme => {
  const colorScheme = 'dark' // useColorScheme()

  return {
    colorScheme: colorScheme || 'light',
    theme: colorScheme ? themes[colorScheme] : themes.light,
  }
}

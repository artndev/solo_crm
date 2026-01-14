import { themes } from '@/constants/themes'
// import { useColorScheme } from 'react-native'

export const useTheme = () => {
  const colorScheme = 'light' // useColorScheme()

  return {
    scheme: colorScheme,
    theme: colorScheme ? themes[colorScheme] : themes.light,
  }
}

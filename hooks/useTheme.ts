import { colors } from '@/constants/colors'
// import { useColorScheme } from 'react-native'

export const useTheme = () => {
  const colorScheme = 'dark' // useColorScheme()

  return {
    scheme: colorScheme,
    theme: colorScheme ? colors[colorScheme] : colors.light,
  }
}

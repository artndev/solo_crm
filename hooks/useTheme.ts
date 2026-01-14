import { colors } from '@/constants/colors'
import { useColorScheme } from 'react-native'

export const useTheme = () => {
  const colorScheme = useColorScheme()

  return colorScheme ? colors[colorScheme] : colors.light
}

import { useTheme } from '@/hooks/useTheme'
import { Image, ImageProps } from 'react-native'

const Logo: React.FC<ImageProps> = props => {
  const { theme } = useTheme()

  return <Image source={theme.splashIcon} {...props} />
}

export default Logo

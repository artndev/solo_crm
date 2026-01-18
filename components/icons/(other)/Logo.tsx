import { useTheme } from '@/hooks/useTheme'
import { SvgProps } from 'react-native-svg'
import DarkLogo from '../(logos)/DarkLogo'
import LightLogo from '../(logos)/LightLogo'

const Logo: React.FC<SvgProps> = props => {
  const { colorScheme } = useTheme()

  return colorScheme === 'light' ? (
    <LightLogo {...props} />
  ) : (
    <DarkLogo {...props} />
  )
}

export default Logo

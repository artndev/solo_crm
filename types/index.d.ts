import { themes } from '@/constants/themes'
import { TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface I_ButtonProps extends TouchableOpacityProps {
  title: string
  bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline'
  textVariant?: 'primary' | 'secondary' | 'default'
  IconLeft?: React.FC<SvgProps>
  IconRight?: React.FC<SvgProps>
}

export interface I_useTheme {
  theme: (typeof themes)['light']
}

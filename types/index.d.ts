import { themes } from '@/constants/themes'
import { TextProps, TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface I_ButtonProps extends TouchableOpacityProps {
  title: string
  bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline'
  textVariant?: 'primary' | 'secondary' | 'default'
  IconLeft?: React.FC<SvgProps>
  IconRight?: React.FC<SvgProps>
}

export interface I_TypoTextProps extends TextProps {
  weight?:
    | 'regular'
    | 'semibold'
    | 'bold'
    | 'medium'
    | 'italic'
    | 'italic-semibold'
  color?: 'default' | 'pale' | 'neon' | 'danger' | 'muted'
  darkOverride?:
    | 'text-default'
    | 'text-pale'
    | 'text-neon'
    | 'text-danger'
    | 'text-muted'
}

export interface I_useTheme {
  colorScheme: 'light' | 'dark'
  theme: (typeof themes)['light']
}

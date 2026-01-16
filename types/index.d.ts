import { themes } from '@/constants/themes'
import { Control } from 'react-hook-form'
import { TextInputProps, TextProps, TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface I_ButtonProps extends TouchableOpacityProps {
  title: string
  bg?: 'default' | 'neon' | 'danger' | 'outline'
  color?: 'default' | 'pale' | 'neon' | 'danger'
  darkOverride?: string
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
  darkOverride?: string
}

export interface I_InputProps extends TextInputProps {
  control: Control<T>
  name: string
  isSecured?: boolean
}

export interface I_useTheme {
  colorScheme: 'light' | 'dark'
  theme: (typeof themes)['light']
}

export type T_Colors = 'default' | 'pale' | 'neon' | 'danger' | 'muted'

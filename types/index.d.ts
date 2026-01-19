import { Control } from 'react-hook-form'
import {
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native'
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
  size?: 'sm' | 'base' | 'md' | 'xl' | '2xl' | '3xl' | '4xl' | 'inherit'
  color?: 'default' | 'pale' | 'neon' | 'danger' | 'muted' | 'inherit'
  darkOverride?: string
}

export interface I_MdContentProps {
  text: string
  textProps?: I_TypoTextProps
  containerProps?: ViewProps
}

export interface I_TypoTextBadgeProps extends I_TypoTextProps {
  badgeValue: number
  badgeClassname?: string
}

export interface I_SvgBadge {
  Svg: React.ReactElement<SvgProps>
  badgeValue: number
  badgeClassname?: string
}

export interface I_SvgWrapper extends ViewProps {
  Svg: React.ComponentType<SvgProps>
}

export interface I_InputProps extends TextInputProps {
  control: Control<T>
  name: string
  isSecured?: boolean
}

export interface I_HeaderProps extends ViewProps {
  firstFloor: React.ReactNode
  firstFloorClassname?: string
  secondFloor: React.ReactNode
  secondFloorClassname?: string
  withBorder?: boolean
}

export interface I_SearchBarProps<T> extends ViewProps {
  flatListData: T[]
  targetField: {
    [K in keyof T]: T[K] extends string ? K : never
  }[keyof T]
  renderItem: (info: { item: T; index: number }) => React.ReactElement
  withBorder?: boolean
}

export interface I_StackItem extends ViewProps {
  Svg: React.ReactElement<SvgProps>
  title: string
}

export interface I_StackItemRecent extends ViewProps {
  Svg: React.ReactElement<SvgProps>
  organization: string
  project: string
  desc: string
  status: string
  time: number
  total?: number
}

export interface I_StackItemNotifications extends ViewProps {
  Svg: React.ReactElement<SvgProps>
  message: string
  date: string
}

export type T_StackItemTypes = {
  StackItem: I_StackItem
  StackItemRecent: I_StackItemRecent
  StackItemNotifications: I_StackItemNotifications
}

export type T_StackItemKeys = keyof T_StackItemTypes

export interface I_Stack<T extends T_StackItemKeys> extends ViewProps {
  stackItems: T_StackItemTypes[T][]
  stackItemType: T
  stackItemClassname?: string
  stackItemBorder?: 'default' | 'full'
}

export interface I_useTheme {
  colorScheme: 'light' | 'dark'
}

export type T_Colors = 'default' | 'pale' | 'neon' | 'danger' | 'muted'

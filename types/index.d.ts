import { BottomSheetProps } from '@gorhom/bottom-sheet'
import { RefAttributes } from 'react'
import { Control } from 'react-hook-form'
import {
  PressableProps,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

export type StringKeys<T> = {
  [K: keyof T]: T[K] extends string ? K : never
}

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

export interface I_SearchBarProps<
  T,
  K extends StringKeys<T>,
> extends ViewProps {
  flatListData: T[]
  dateField: K & keyof T
  targetField: Exclude<StringKeys<T>, K> & keyof T
  renderItem: (info: { item: T; index: number }) => React.ReactElement
  withBorder?: boolean
}

export interface I_RadioButton {
  value: string
}

export interface I_RadioButtonGroupProps extends ViewProps {
  radioButtons: I_RadioButton[]
  defaultValue: string
  textProps: I_TypoTextProps
  dividerComponent?: React.ReactElement
  activeClassname?: string
  dotClassname?: string
  onChangeValue?: (value: string) => void
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

export type T_BottomSheetControllerMethods = {
  fold: () => void
  unfold: () => void
}

export interface I_BottomSheetController
  extends BottomSheetProps, RefAttributes<T_BottomSheetControllerMethods> {
  className?: string
}

export type T_FilterButtonMethods = {
  increment: () => void
  decrement: () => void
  set: (value: number) => void
}

export interface I_FilterButton
  extends PressableProps, RefAttributes<T_FilterButtonMethods> {
  title: string
  textProps?: I_TypoTextProps
}

export interface I_BottomSheetWithHeaderProps extends I_BottomSheetController {
  title: string
  leftCaption?: string
  onLeftAction: () => void
  rightCaption?: string
  onRightAction: () => void
}

export type T_CheckboxGroupMethods = {
  add: (value: string) => void
  remove: (value: string) => void
  clear: () => void
}

export type I_Checkbox = {
  value: string
}

export interface I_CheckboxGroupProps
  extends ViewProps, RefAttributes<T_CheckboxGroupMethods> {
  checkboxes: I_Checkbox[]
  defaultValues: string[]
  textProps: I_TypoTextProps
  dividerComponent?: React.ReactElement
  activeClassname?: string
  tickClassname?: string
  onChangeValue?: (values: string[]) => void
  onChangeAmount?: (amount: number) => void
}

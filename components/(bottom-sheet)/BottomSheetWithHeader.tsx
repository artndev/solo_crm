import { cn } from '@/lib/utils'
import { I_BottomSheetWithHeaderProps } from '@/types'
import React from 'react'
import { Pressable, View } from 'react-native'
import TypoText from '../(text)/TypoText'
import BottomSheetController from './BottomSheetController'

const BottomSheetWithHeader: React.FC<I_BottomSheetWithHeaderProps> = ({
  title,
  leftCaption = 'Save',
  onLeftAction,
  rightCaption = 'Cancel',
  onRightAction,
  children,
  className,
  ...props
}) => {
  return (
    <BottomSheetController className={cn('gap-10', className)} {...props}>
      <View className="w-full border-b border-input p-5">
        <View className="flex flex-row justify-between items-center w-full">
          <Pressable onPress={onLeftAction}>
            <TypoText weight="bold" size="md">
              {leftCaption}
            </TypoText>
          </Pressable>

          <TypoText weight="semibold">{title}</TypoText>

          <Pressable onPress={onRightAction}>
            <TypoText weight="bold" size="md">
              {rightCaption}
            </TypoText>
          </Pressable>
        </View>
      </View>

      <View className="flex-1 px-5 pb-5">{children}</View>
    </BottomSheetController>
  )
}

export default BottomSheetWithHeader

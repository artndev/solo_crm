import { cn } from '@/lib/utils'
import {
  I_Stack,
  I_StackItem,
  T_StackItemKeys,
  T_StackItemTypes,
} from '@/types'
import React from 'react'
import { View } from 'react-native'
import TypoText from './(text)/TypoText'
import Arrow from './icons/Arrow'

export const StackItem: React.FC<I_StackItem> = ({
  Svg,
  title,
  className,
  ...props
}) => {
  return (
    <View
      className={cn(
        'flex flex-row justify-between items-center w-full h-[45px]',
        className
      )}
      {...props}
    >
      <View className="flex flex-row items-center gap-4">
        <Svg />

        <TypoText weight="semibold" className="text-md">
          {title}
        </TypoText>
      </View>

      <Arrow className="text-tab-non-active" />
    </View>
  )
}

const componentMap = {
  StackItem,
}

const Stack = <T extends T_StackItemKeys>({
  stackItems,
  stackItemType,
  itemBorder = 'default',
  className,
  ...props
}: I_Stack<T>) => {
  const Component = componentMap[stackItemType] as React.FC<T_StackItemTypes[T]>

  return (
    <View
      className={cn(
        'w-full border border-input rounded-[10px] py-1.5 shadow-button',
        itemBorder === 'default' ? 'px-5' : '',
        className
      )}
      {...props}
    >
      {stackItems.map((props, i) => {
        return (
          <Component
            key={i}
            className={cn(
              className,
              i !== stackItems.length - 1 ? 'border-b border-b-input' : '',
              itemBorder === 'full' ? 'px-5' : ''
            )}
            {...props}
          />
        )
      })}
    </View>
  )
}

export default Stack

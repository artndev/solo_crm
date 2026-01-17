import { cn } from '@/lib/utils'
import { I_Stack, I_StackItem } from '@/types'
import React from 'react'
import { View } from 'react-native'
import Arrow from './icons/Arrow'
import TypoText from './TypoText'

const StackItem: React.FC<I_StackItem> = ({
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

const Stack: React.FC<I_Stack> = ({ stackItems, className, ...props }) => {
  return (
    <View
      className={cn(
        'w-full border border-input rounded-[10px] px-5 py-1.5 shadow-button',
        className
      )}
      {...props}
    >
      {stackItems.map(({ Svg, title, className, ...props }, i) => {
        return (
          <StackItem
            key={i}
            Svg={Svg}
            title={title}
            className={cn(
              className,
              i !== stackItems.length - 1 ? 'border-b border-b-input' : ''
            )}
            {...props}
          />
        )
      })}
    </View>
  )
}

export default Stack

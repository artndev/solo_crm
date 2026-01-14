import { cn } from '@/lib/utils'
import { I_ButtonProps } from '@/types'
import { cva } from 'class-variance-authority'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const bgVariants = cva('', {
  variants: {
    bgVariant: {
      primary: 'bg-[#150AE9]',
      secondary: 'bg-[#1A1F35]',
      danger: 'bg-[#E62043]',
      outline: 'bg-transparent border-[0.5px] border-[#BEBFC3]"',
    },
  },
  defaultVariants: {
    bgVariant: 'primary',
  },
})

const textVariants = cva('', {
  variants: {
    textVariant: {
      primary: 'text-[#150AE9]',
      secondary: 'text-[#3B4356]',
      default: 'text-white',
    },
  },
  defaultVariants: {
    textVariant: 'default',
  },
})

const Button: React.FC<I_ButtonProps> = ({
  onPress,
  title,
  bgVariant,
  textVariant,
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'flex flex-row justify-between items-center gap-4 min-w-[200px] rounded-[8px] shadow-button p-3',
        bgVariants({ bgVariant }),
        className
      )}
      {...props}
    >
      <View className="w-6 h-auto flex items-center justify-center">
        {IconLeft && <IconLeft width={20} height={20} fill="black" />}
      </View>

      <Text
        className={cn(
          'text-xl font-sfpro-medium',
          textVariants({ textVariant })
        )}
      >
        {title}
      </Text>

      <View className="w-6 h-auto flex items-center justify-center">
        {IconRight && <IconRight width={20} height={20} fill="black" />}
      </View>
    </TouchableOpacity>
  )
}

export default Button

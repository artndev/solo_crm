import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_ButtonProps } from '@/types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

/* Additional classes */
// const bgVariants = cva('', {
//   variants: {
//     bgVariant: {
//       primary: '',
//       secondary: '',
//       danger: '',
//       outline: '',
//     },
//   },
// })

const Button: React.FC<I_ButtonProps> = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  const { theme } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'flex flex-row justify-between items-center gap-[14px] min-w-[200px] rounded-[8px] shadow-button p-[14px]',
        className
      )}
      style={{
        ...(bgVariant === 'outline'
          ? {
              borderWidth: 0.5,
              borderColor: theme.borderButton,
            }
          : {}),
        backgroundColor: theme.bgButton[bgVariant],
      }}
      {...props}
    >
      <View className="w-6 flex items-center justify-center">
        {IconLeft && (
          <IconLeft
            width={20}
            height={20}
            color={theme.textButton[textVariant]}
          />
        )}
      </View>

      <Text
        className="text-xl font-sfpro-medium"
        style={{
          color: theme.textButton[textVariant],
        }}
      >
        {title}
      </Text>

      <View className="w-6 flex items-center justify-center">
        {IconRight && (
          <IconRight
            width={20}
            height={20}
            color={theme.textButton[textVariant]}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default Button

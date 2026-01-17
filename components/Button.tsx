import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_ButtonProps } from '@/types'
import { cva } from 'class-variance-authority'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import TypoText from './(text)/TypoText'

const bgVariants = cva('', {
  variants: {
    bgVariant: {
      default: 'bg-default',
      neon: 'bg-neon',
      danger: 'bg-danger',
      outline: 'bg-transparent border-[0.5px] border-button',
    },
    theme: {
      light: '',
      dark: 'bg-muted-2',
    },
  },
  compoundVariants: [
    {
      bgVariant: 'outline',
      theme: 'dark',
      class: 'border-0 bg-muted-3',
    },
  ],
  defaultVariants: {
    bgVariant: 'default',
    theme: 'light',
  },
})

const colorVariants = cva('', {
  variants: {
    colorVariant: {
      default: 'text-default',
      pale: 'text-pale',
      neon: 'text-neon',
      danger: 'text-danger',
    },
    theme: {
      light: '',
      dark: 'text-pale',
    },
  },
  defaultVariants: {
    colorVariant: 'pale',
    theme: 'light',
  },
})

const Button: React.FC<I_ButtonProps> = ({
  title,
  bg: bgVariant,
  color: colorVariant,
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <TouchableOpacity
      className={cn(
        'flex flex-row justify-between items-center gap-[14px] min-w-[200px] rounded-[8px] shadow-button p-[14px]',
        bgVariants({ bgVariant, theme: colorScheme }),
        className
      )}
      {...props}
    >
      <View className="w-6 flex items-center justify-center">
        {IconLeft && (
          <IconLeft
            width={20}
            height={20}
            className={colorVariants({ colorVariant, theme: colorScheme })}
          />
        )}
      </View>

      <TypoText
        weight="medium"
        className={cn(
          'text-xl',
          colorVariants({ colorVariant, theme: colorScheme })
        )}
      >
        {title}
      </TypoText>

      <View className="w-6 flex items-center justify-center">
        {IconRight && (
          <IconRight
            width={20}
            height={20}
            className={colorVariants({ colorVariant, theme: colorScheme })}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default Button

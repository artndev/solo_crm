import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_TypoTextProps } from '@/types'
import { cva } from 'class-variance-authority'
import React from 'react'
import { Text } from 'react-native'

const weightVariants = cva('', {
  variants: {
    weightVariant: {
      regular: 'font-sfpro-regular',
      semibold: 'font-sfpro-semibold',
      bold: 'font-sfpro-bold',
      medium: 'font-sfpro-medium',
      italic: 'font-sfpro-italic',
      'italic-semibold': 'font-sfpro-italic-semibold',
    },
  },
  defaultVariants: {
    weightVariant: 'regular',
  },
})

const sizeVariants = cva('', {
  variants: {
    sizeVariant: {
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      inherit: '',
    },
  },
  defaultVariants: {
    sizeVariant: 'base',
  },
})

const colorVariants = cva('', {
  variants: {
    colorVariant: {
      default: 'text-default',
      pale: 'text-pale',
      neon: 'text-neon',
      danger: 'text-danger',
      muted: 'text-muted',
      inherit: '',
    },
    theme: {
      light: '',
      dark: 'text-pale',
    },
  },
  defaultVariants: {
    colorVariant: 'default',
    theme: 'light',
  },
})

const TypoText: React.FC<I_TypoTextProps> = ({
  weight: weightVariant,
  size: sizeVariant,
  color: colorVariant,
  darkOverride,
  className,
  children,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <Text
      className={cn(
        sizeVariants({ sizeVariant }),
        weightVariants({ weightVariant }),
        colorVariants({ colorVariant, theme: colorScheme }),
        className,
        colorScheme === 'dark' ? darkOverride : ''
      )}
      {...props}
    >
      {children}
    </Text>
  )
}

export default TypoText

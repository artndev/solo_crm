import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_TypoTextProps } from '@/types'
import { cva } from 'class-variance-authority'
import React from 'react'
import { Text } from 'react-native'

/* Additional classes */
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

const colorVariants = cva('', {
  variants: {
    colorVariant: {
      default: 'text-default',
      pale: 'text-pale',
      neon: 'text-neon',
      danger: 'text-danger',
      muted: 'text-muted',
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
        'text-base leading-[18px]',
        weightVariants({ weightVariant }),
        colorVariants({ colorVariant, theme: colorScheme }),
        colorScheme === 'dark' ? darkOverride : '',
        className
      )}
      style={{
        includeFontPadding: false,
      }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default TypoText

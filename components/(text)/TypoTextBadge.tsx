import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_TypoTextBadgeProps } from '@/types'
import React from 'react'
import { View } from 'react-native'
import TypoText from './TypoText'

const TypoTextBadge: React.FC<I_TypoTextBadgeProps> = ({
  badgeValue,
  badgeClassname,
  children,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <View className="relative">
      <TypoText {...props}>{children}</TypoText>

      <View
        className={cn(
          'absolute top-3.5 left-full ml-2 flex items-center justify-center min-w-[30px] h-[20px] rounded-full px-2 bg-neon',
          badgeClassname,
          colorScheme === 'dark' ? 'bg-muted-2' : ''
        )}
      >
        <TypoText
          weight="semibold"
          color="pale"
          className="text-sm text-center w-full"
        >
          {badgeValue > 99 ? '99+' : badgeValue}
        </TypoText>
      </View>
    </View>
  )
}

export default TypoTextBadge

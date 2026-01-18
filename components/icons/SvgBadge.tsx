import { cn } from '@/lib/utils'
import { I_SvgBadge } from '@/types'
import React from 'react'
import { View } from 'react-native'
import TypoText from '../(text)/TypoText'

const SvgBadge: React.FC<I_SvgBadge> = ({
  Svg,
  badgeValue,
  badgeClassname,
}) => {
  return (
    <View className="relative">
      {Svg}

      <View
        className={cn(
          'absolute -top-2 left-full -ml-3.5 flex items-center justify-center min-w-[20px] h-[20px] rounded-full px-1.5 bg-danger',
          badgeClassname
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

export default SvgBadge

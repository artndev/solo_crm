import { cn } from '@/lib/utils'
import React from 'react'
import { View, ViewProps } from 'react-native'

const Card: React.FC<ViewProps> = ({ className, children, ...props }) => {
  return (
    <View
      className={cn(
        'w-full border border-input rounded-[10px] px-3 py-1.5 shadow-button',
        className
      )}
      {...props}
    >
      {children}
    </View>
  )
}

export default Card

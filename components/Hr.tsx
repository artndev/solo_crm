import { cn } from '@/lib/utils'
import React from 'react'
import { View, ViewProps } from 'react-native'

const Hr: React.FC<ViewProps> = ({ className, ...props }) => {
  return (
    <View
      className={cn('w-full bg-muted h-[1px] my-2 opacity-25', className)}
      {...props}
    />
  )
}

export default Hr

import { cn } from '@/lib/utils'
import { I_HeaderProps } from '@/types'
import React from 'react'
import { View } from 'react-native'

const ScreenHeader: React.FC<I_HeaderProps> = ({
  firstFloor,
  firstFloorClassname,
  secondFloor,
  secondFloorClassname,
  className,
  ...props
}) => {
  return (
    <View
      className={cn('flex flex-col w-full px-5 pt-[10px]', className)}
      {...props}
    >
      <View
        className={cn(
          'flex flex-row items-center w-full min-h-[40px]',
          firstFloorClassname
        )}
      >
        {firstFloor}
      </View>

      <View
        className={cn(
          'flex flex-row items-center w-full min-h-[50px]',
          secondFloorClassname
        )}
      >
        {secondFloor}
      </View>
    </View>
  )
}

export default ScreenHeader

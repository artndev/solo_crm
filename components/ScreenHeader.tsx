import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_HeaderProps } from '@/types'
import React from 'react'
import { View } from 'react-native'

const ScreenHeader: React.FC<I_HeaderProps> = ({
  firstFloor,
  firstFloorClassname,
  secondFloor,
  secondFloorClassname,
  withBorder = false,
  className,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <View
      className={cn(
        'flex flex-col w-full px-5 pb-2 bg-light-screen-header',
        withBorder ? 'border-b border-input' : '',
        className,
        colorScheme === 'dark' ? 'border-muted-3 bg-dark-screen-header' : ''
      )}
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

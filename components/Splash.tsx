import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = () => {
  const { theme } = useTheme()

  console.log(theme)

  return (
    <SafeAreaView>
      <View
        className="flex justify-center items-center size-full"
        style={{
          backgroundColor: theme.splashBackground,
        }}
      >
        <Image
          className="w-[200px] h-auto"
          source={theme.splashIcon}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  )
}

export default Splash

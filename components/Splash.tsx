import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from './icons/Logo'

const Splash = () => {
  const { theme } = useTheme()

  return (
    <SafeAreaView
      className="flex justify-center items-center size-full"
      style={{
        backgroundColor: theme.splashBackground,
      }}
    >
      <Logo />
    </SafeAreaView>
  )
}

export default Splash

import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from './icons/(other)/Logo'

const Splash = () => {
  const { colorScheme } = useTheme()

  return (
    <SafeAreaView
      className="flex justify-center items-center size-full"
      style={{
        backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF',
      }}
    >
      <Logo />
    </SafeAreaView>
  )
}

export default Splash

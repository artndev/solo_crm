import Splash from '@/components/Splash'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import './global.css'

SplashScreen.preventAutoHideAsync()

export const RootLayout = () => {
  const [isSplashShown, setIsSplashShown] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await SplashScreen.hideAsync()

      setIsSplashShown(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (isSplashShown) {
    return <Splash />
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

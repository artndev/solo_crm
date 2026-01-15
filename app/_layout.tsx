import Splash from '@/components/Splash'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import './global.css'

SplashScreen.preventAutoHideAsync()

export const RootLayout = () => {
  const [loaded] = useFonts({
    'SFPro-Regular': require('../assets/fonts/SFPro-Regular.otf'),
    'SFPro-Semibold': require('../assets/fonts/SFPro-Semibold.otf'),
    'SFPro-Bold': require('../assets/fonts/SFPro-Bold.otf'),
    'SFPro-Medium': require('../assets/fonts/SFPro-Medium.otf'),
    'SFPro-Italic': require('../assets/fonts/SFPro-LightItalic.otf'),
    'SFPro-ItalicSemibold': require('../assets/fonts/SFPro-SemiBoldItalic.otf'),
  })
  const [isSplashShown, setIsSplashShown] = useState<boolean>(true)

  useEffect(() => {
    if (!loaded) {
      return
    }

    const hideSplash = async () => {
      await SplashScreen.hideAsync()
      setIsSplashShown(false)
    }

    hideSplash()
  }, [loaded])

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

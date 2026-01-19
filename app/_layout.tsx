import Splash from '@/components/Splash'
import { useTheme } from '@/hooks/useTheme'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './global.css'

SplashScreen.preventAutoHideAsync()

export const AppLayout = () => {
  const [loaded] = useFonts({
    'SFPro-Regular': require('../assets/fonts/SFPro-Regular.otf'),
    'SFPro-Semibold': require('../assets/fonts/SFPro-Semibold.otf'),
    'SFPro-Bold': require('../assets/fonts/SFPro-Bold.otf'),
    'SFPro-Medium': require('../assets/fonts/SFPro-Medium.otf'),
    'SFPro-Italic': require('../assets/fonts/SFPro-LightItalic.otf'),
    'SFPro-ItalicSemibold': require('../assets/fonts/SFPro-SemiBoldItalic.otf'),
  })
  const { colorScheme } = useTheme()
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
    <KeyboardProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: colorScheme === 'dark' ? '#161616' : '#FFF',
              },
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </KeyboardProvider>
  )
}

export default AppLayout

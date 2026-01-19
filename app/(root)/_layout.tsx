import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export const RootLayout = () => {
  const { colorScheme } = useTheme()

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#161616' : '#FFF',
          },
        }}
      >
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout

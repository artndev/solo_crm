import { Stack } from 'expo-router'
import 'react-native-reanimated'
import './global.css'

export const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

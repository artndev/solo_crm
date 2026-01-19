import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

export const AuthLayout = () => {
  const { colorScheme } = useTheme()

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colorScheme === 'dark' ? '#161616' : '#FFF',
        },
      }}
    >
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout

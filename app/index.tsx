import { Redirect } from 'expo-router'

const Index = () => {
  const isSignedIn = true // useAuth()

  if (isSignedIn) {
    return <Redirect href="/(tabs)/home" />
  }

  return <Redirect href="/(auth)/welcome" />
}

export default Index

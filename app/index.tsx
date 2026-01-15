import { Redirect } from 'expo-router'

const Index = () => {
  const isSignedIn = false // useAuth()

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />
  }

  return <Redirect href="/(auth)/welcome" />
}

export default Index

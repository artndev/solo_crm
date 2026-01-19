import { Redirect } from 'expo-router'

const Index = () => {
  const isSignedIn = true // useAuth()

  if (isSignedIn) {
    return <Redirect href="/home" />
  }

  return <Redirect href="/welcome" />
}

export default Index

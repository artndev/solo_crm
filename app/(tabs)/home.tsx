import TypoText from '@/components/text/TypoText'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <TypoText weight="bold">Hello! Welcome to the home screen!</TypoText>
    </SafeAreaView>
  )
}

export default Home

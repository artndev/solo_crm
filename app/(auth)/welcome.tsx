import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center size-full">
        <Text className="text-2xl font-bold">Welcome, pal! {'=)'}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

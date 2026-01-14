import { useTheme } from '@/hooks/useTheme'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  const theme = useTheme()

  return (
    <SafeAreaView>
      <View
        className="flex justify-center items-center size-full"
        style={{
          backgroundColor: theme.bg,
        }}
      >
        <Text
          className="text-2xl font-bold"
          style={{
            color: theme.title,
          }}
        >
          Welcome, pal! {'=)'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

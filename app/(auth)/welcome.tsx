import Button from '@/components/Button'
import * as icons from '@/constants/icons'
import { useTheme } from '@/hooks/useTheme'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  const { theme } = useTheme()

  return (
    <SafeAreaView
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

      <Button
        title="Log In"
        IconLeft={icons.FaceIdIcon}
        bgVariant="outline"
        textVariant="secondary"
      />
    </SafeAreaView>
  )
}

export default Welcome

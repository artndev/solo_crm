import Button from '@/components/Button'
import FaceId from '@/components/icons/FaceId'
import Input from '@/components/Input'
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
        IconLeft={FaceId}
        bgVariant="outline"
        textVariant="secondary"
      />

      <Input />
    </SafeAreaView>
  )
}

export default Welcome

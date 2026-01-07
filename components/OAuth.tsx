import { icons } from '@/constants'
import { Image, Text, View } from 'react-native'
import Button from './Button'

const OAuth = () => {
  const handleGoogleOAuth = async () => {}

  return (
    <View>
      <View className="flex flex-row justify-center items-center gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <Button
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={() => {}}
      />
    </View>
  )
}

export default OAuth

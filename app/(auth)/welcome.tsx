import Button from '@/components/Button'
import FaceId from '@/components/icons/FaceId'
import Logo from '@/components/icons/Logo'
import Mail from '@/components/icons/Mail'
import TypoText from '@/components/text/TypoText'
import { useTheme } from '@/hooks/useTheme'
import { View } from 'react-native'
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
      <View className="flex flex-col justify-between items-center size-full max-w-[320px] max-h-[620px]">
        <Logo width={200} resizeMode="contain" />

        <View className="flex flex-col gap-[45px] w-full">
          <View className="flex justify-center items-center">
            <TypoText weight="semibold" className="text-3xl">
              Welcome to SoloCRM
            </TypoText>

            <TypoText className="text-center" darkOverride="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </TypoText>
          </View>

          <View className="flex flex-col gap-[17px] w-full">
            <Button
              title="Use Face ID"
              IconLeft={FaceId}
              bgVariant="danger"
              className="w-full"
            />

            <Button
              title="Login with email"
              IconLeft={Mail}
              bgVariant="outline"
              textVariant="secondary"
              className="w-full"
            />
          </View>
        </View>

        <TypoText className="text-center" darkOverride="text-default">
          Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
          <TypoText weight="bold" color="danger">
            Terms and Conditions
          </TypoText>
        </TypoText>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

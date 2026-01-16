import Button from '@/components/Button'
import Input from '@/components/Input'
import TypoText from '@/components/text/TypoText'
import { useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('Redirecting')

    router.replace('/(tabs)/home')
  }

  return (
    <SafeAreaView className="size-full">
      <View className="flex flex-col size-full">
        <View className="flex flex-col w-full px-4">
          <TypoText weight="semibold" color="neon" className="self-end">
            Forgot password?
          </TypoText>

          <TypoText weight="bold" className="text-4xl">
            Log in
          </TypoText>
        </View>

        <View className="flex-1 flex justify-center items-center">
          <View className="flex flex-col justify-between items-center size-full max-w-[320px] max-h-[540px]">
            <View className="flex flex-col justify-center items-center gap-12 w-full">
              <View className="flex flex-col gap-6 w-full">
                <Input control={control} name="email" placeholder="Email" />
                <Input
                  control={control}
                  name="password"
                  placeholder="Password"
                  isSecured={true}
                />
              </View>

              <Button
                className="w-full"
                title="Sign In"
                bg="neon"
                onPress={handleSubmit(onSubmit)}
              />

              <TypoText weight="semibold">Don&apos;t have an account?</TypoText>

              <Button
                className="w-full"
                title="Register"
                bg="outline"
                color="neon"
              />
            </View>

            <TypoText className="text-center" darkOverride="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing{' '}
              <TypoText weight="bold" color="neon">
                Terms and Conditions
              </TypoText>
            </TypoText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

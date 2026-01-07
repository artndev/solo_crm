import Button from '@/components/Button'
import Input from '@/components/Input'
import OAuth from '@/components/OAuth'
import { icons, images } from '@/constants'
import { useSignIn } from '@clerk/clerk-expo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { signInSchema } from './_schemas'

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const onSignInPress = async (data: { email: string; password: string }) => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })

        router.replace('/')

        return
      }

      if (signInAttempt.status === 'needs_second_factor') {
        await signInAttempt.prepareSecondFactor({
          strategy: 'email_code',
        })

        setVerification({
          ...verification,
          state: 'pending',
        })

        return
      }

      console.error(JSON.stringify(signInAttempt, null, 2))
    } catch (err: any) {
      Alert.alert('Error', err.errors[0].longMessage)
    }
  }

  const onVerifyPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.attemptSecondFactor({
        strategy: 'email_code',
        code: verification.code,
      })

      if (signInAttempt.status !== 'complete') {
        setVerification({
          ...verification,
          error: 'Verification failed',
          state: 'failed',
        })
        return
      }

      await setActive({ session: signInAttempt.createdSessionId })

      setVerification({
        ...verification,
        state: 'success',
      })
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: 'failed',
      })
    }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />

          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="flex flex-col gap-6 p-6">
          <View className="flex flex-col">
            <View>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    icon={icons.email}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.email && (
                <Text className="text-red-500 text-sm">
                  {errors.email.message}
                </Text>
              )}
            </View>
            <View>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    icon={icons.lock}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry={true}
                  />
                )}
              />
              {errors.password && (
                <Text className="text-red-500 text-sm">
                  {errors.password.message}
                </Text>
              )}
            </View>
          </View>

          <Button title="Sign In" onPress={handleSubmit(onSignInPress)} />

          <OAuth />
        </View>

        {/* OAuth */}

        <Link
          href="/sign-up"
          className="text-lg text-center text-general-200 mt-10"
        >
          <Text>Don&apos;t have an account</Text>{' '}
          <Text className="text-primary-500">Sign Up</Text>
        </Link>
      </View>

      {/* Pending modal */}

      <ReactNativeModal
        isVisible={verification.state === 'pending'}
        onModalHide={() => {
          if (verification.state !== 'success') {
            return
          }

          setShowSuccessModal(true)
        }}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text className="text-2xl font-JakartaExtraBold mb-2">
            Confirmation
          </Text>

          <Text className="font-Jakarta mb-5">
            We&apos;ve sent a confirmation code to your email address.
          </Text>

          <Input
            label="Code"
            icon={icons.lock}
            placeholder="12345"
            value={verification.code}
            keyboardType="numeric"
            onChangeText={code => setVerification({ ...verification, code })}
          />

          {verification.error && (
            <Text className="text-red-500 text-sm mt-1">
              {verification.error}
            </Text>
          )}

          <Button
            title="Verify Email"
            onPress={onVerifyPress}
            className="mt-5 bg-success-500"
          />
        </View>
      </ReactNativeModal>

      {/* Verification modal */}

      <ReactNativeModal isVisible={showSuccessModal}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] h-[110px] mx-auto my-5"
          />

          <Text className="text-3xl font-JakartaBold text-center">
            Confirmed
          </Text>

          <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
            You have successfully confirmed your account.
          </Text>

          <Button
            title="Browse Home"
            onPress={() => {
              setShowSuccessModal(false)

              router.push('/(root)/(tabs)/home')
            }}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  )
}

export default SignIn

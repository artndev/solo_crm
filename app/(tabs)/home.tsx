import Cat from '@/assets/images/cat.png'
import Message from '@/components/icons/Message'
import Notification from '@/components/icons/Notification'
import SvgBadge from '@/components/icons/SvgBadge'
import ScreenHeader from '@/components/ScreenHeader'
import TypoTextBadge from '@/components/TypoTextBadge'
import React from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="size-full">
      <View className="flex flex-col size-full">
        <ScreenHeader
          firstFloor={
            <>
              <Image
                source={Cat}
                resizeMode="cover"
                className="w-[34px] h-[34px] rounded-full"
              />

              <View className="flex-row items-center gap-[30px]">
                <SvgBadge Svg={Message} badgeValue={8} />

                <SvgBadge Svg={Notification} badgeValue={262} />
              </View>
            </>
          }
          firstFloorClassname="justify-between"
          secondFloor={
            <TypoTextBadge weight="bold" className="text-4xl" badgeValue={100}>
              Home
            </TypoTextBadge>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

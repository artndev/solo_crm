import Cat from '@/assets/images/cat.png'
import Hr from '@/components/Hr'
import Message from '@/components/icons/(screen-header)/Message'
import Notification from '@/components/icons/(screen-header)/Notification'
import Plus from '@/components/icons/(screen-header)/Plus'
import Activity from '@/components/icons/(stack)/Activity'
import Contacts from '@/components/icons/(stack)/Contacts'
import Issues from '@/components/icons/(stack)/Issues'
import Organizations from '@/components/icons/(stack)/Organizations'
import Projects from '@/components/icons/(stack)/Projects'
import Screenshots from '@/components/icons/(stack)/Screenshots'
import Shortcuts from '@/components/icons/(stack)/Shortcuts'
import Users from '@/components/icons/(stack)/Users'
import SvgBadge from '@/components/icons/SvgBadge'
import ScreenHeader from '@/components/ScreenHeader'
import Stack from '@/components/Stack'
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

                <Plus className="text-neon" />
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

        <Hr />

        <View className="px-5">
          <Stack
            stackItems={[
              {
                Svg: Issues,
                title: 'Issues',
              },
              {
                Svg: Projects,
                title: 'Projects',
              },
              {
                Svg: Organizations,
                title: 'Organizations (Clients)',
              },
              {
                Svg: Users,
                title: 'Users',
              },
              {
                Svg: Activity,
                title: 'Activity monitor',
              },
              {
                Svg: Screenshots,
                title: 'Screenshots',
              },
              {
                Svg: Contacts,
                title: 'Contacts',
              },
              {
                Svg: Shortcuts,
                title: 'Shortcuts',
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

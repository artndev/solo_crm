import Bold from '@/components/(text)/Bold'
import TypoText from '@/components/(text)/TypoText'
import TypoTextBadge from '@/components/(text)/TypoTextBadge'
import Back from '@/components/icons/(screen-header)/Back'
import Search from '@/components/icons/(screen-header)/Search'
import Cross from '@/components/icons/(stack)/Cross'
import Edit from '@/components/icons/(stack)/Edit'
import Plus2 from '@/components/icons/(stack)/Plus2'
import Tick from '@/components/icons/(stack)/Tick'
import ScreenHeader from '@/components/ScreenHeader'
import Stack from '@/components/Stack'
import { useTheme } from '@/hooks/useTheme'
import { I_TypoTextProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgProps } from 'react-native-svg'

const NOTIFICATIONS_DATA: Record<
  string,
  {
    Svg: React.ReactElement<SvgProps>
    message: React.ReactElement<I_TypoTextProps> | string
    date: string
  }[]
> = {
  'Today, Apr 09, 2020': [
    {
      Svg: <Cross />,
      message: (
        <TypoText size="sm" className="w-full">
          Invoice <Bold>marked &quot;2020.0005.3381&quot; as</Bold> Cancelled.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Plus2 />,
      message: (
        <TypoText size="sm" className="w-full">
          New invoice{' '}
          <Bold>&quot;2020.0005.3381&quot; added to the project</Bold> Forus
          Platform.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Edit />,
      message: (
        <TypoText size="sm" className="w-full">
          A new note was added to the project <Bold>Corona Voucher</Bold>{' '}
          system.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Tick />,
      message: (
        <TypoText size="sm" className="w-full">
          Status changed from <Bold>Concept to Closed</Bold> for the project{' '}
          <Bold>1Language Contact Portal</Bold>.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
  ],
  'Yesterday, Apr 08, 2020': [
    {
      Svg: <Cross />,
      message: (
        <TypoText size="sm" className="w-full">
          Invoice <Bold>marked &quot;2020.0005.3381&quot; as</Bold> Cancelled.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Plus2 />,
      message: (
        <TypoText size="sm" className="w-full">
          New invoice{' '}
          <Bold>&quot;2020.0005.3381&quot; added to the project</Bold> Forus
          Platform.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Edit />,
      message: (
        <TypoText size="sm" className="w-full">
          A new note was added to the project <Bold>Corona Voucher</Bold>{' '}
          system.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
    {
      Svg: <Tick />,
      message: (
        <TypoText size="sm" className="w-full">
          Status changed from <Bold>Concept to Closed</Bold> for the project{' '}
          <Bold>1Language Contact Portal</Bold>.
        </TypoText>
      ),
      date: 'Apr 09, 2020 18:23',
    },
  ],
}

const Notifications = () => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { colorScheme } = useTheme()

  return (
    <View className="w-full min-h-full">
      <View className="flex flex-col size-full">
        <ScreenHeader
          className={colorScheme === 'dark' ? 'border-muted-3' : ''}
          style={{
            paddingTop: insets.top,
          }}
          firstFloor={
            <>
              <Pressable onPress={() => router.back()}>
                <Back className={colorScheme === 'dark' ? 'text-muted' : ''} />
              </Pressable>

              <Search className={colorScheme === 'dark' ? 'text-muted' : ''} />
            </>
          }
          firstFloorClassname="justify-between"
          secondFloor={
            <TypoTextBadge weight="bold" size="4xl" badgeValue={27}>
              Notifications
            </TypoTextBadge>
          }
          withBorder
        />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
        >
          {Object.entries(NOTIFICATIONS_DATA).map(([key, val], i) => (
            <View key={i} className="flex flex-col gap-10 p-5">
              <View className="flex flex-col gap-5">
                <TypoText weight="semibold" size="md">
                  {key}
                </TypoText>

                <Stack
                  className={colorScheme === 'dark' ? 'border-muted-3' : ''}
                  stackItemType="StackItemNotifications"
                  stackItems={val}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Notifications

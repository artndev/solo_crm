import TypoText from '@/components/(text)/TypoText'
import TypoTextBadge from '@/components/(text)/TypoTextBadge'
import Back from '@/components/icons/(screen-header)/Back'
import Search from '@/components/icons/(screen-header)/Search'
import ScreenHeader from '@/components/ScreenHeader'
import Stack from '@/components/Stack'
import { STACK_ITEM_NOTIFICATIONS_DATA } from '@/constants/data'
import { useTheme } from '@/hooks/useTheme'
import { formatDate } from '@/lib/utils'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Notifications = () => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { colorScheme } = useTheme()

  return (
    <View className="w-full min-h-full">
      <View className="flex flex-col size-full">
        <ScreenHeader
          style={{
            paddingTop: insets.top + 10,
          }}
          firstFloor={
            <>
              <Pressable onPress={() => router.back()}>
                <Back className={colorScheme === 'dark' ? 'text-muted' : ''} />
              </Pressable>

              <Pressable onPress={() => router.push('/search')}>
                <Search
                  className={colorScheme === 'dark' ? 'text-muted' : ''}
                />
              </Pressable>
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
          contentContainerClassName="p-5"
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
        >
          <View className="flex flex-col gap-10">
            {Object.entries(STACK_ITEM_NOTIFICATIONS_DATA).map(
              ([key, val], i) => (
                <View key={i} className="flex flex-col gap-5">
                  <TypoText weight="semibold" size="md">
                    {formatDate(key)}
                  </TypoText>

                  <Stack
                    className={colorScheme === 'dark' ? 'border-muted-3' : ''}
                    stackItemType="StackItemNotifications"
                    stackItems={val}
                  />
                </View>
              )
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Notifications

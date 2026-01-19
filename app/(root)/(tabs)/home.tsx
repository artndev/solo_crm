import Cat from '@/assets/images/cat.png'
import TypoText from '@/components/(text)/TypoText'
import Notification from '@/components/icons/(screen-header)/Notification'
import Plus from '@/components/icons/(screen-header)/Plus'
import Activity from '@/components/icons/(shortcuts)/Activity'
import Contacts from '@/components/icons/(shortcuts)/Contacts'
import Issues from '@/components/icons/(shortcuts)/Issues'
import Organizations from '@/components/icons/(shortcuts)/Organizations'
import Projects from '@/components/icons/(shortcuts)/Projects'
import Screenshots from '@/components/icons/(shortcuts)/Screenshots'
import Shortcuts from '@/components/icons/(shortcuts)/Shortcuts'
import Users from '@/components/icons/(shortcuts)/Users'
import Circle from '@/components/icons/(stack)/Circle'
import SvgBadge from '@/components/icons/SvgBadge'
import Quickstart from '@/components/Quickstart'
import ScreenHeader from '@/components/ScreenHeader'
import Stack from '@/components/Stack'
import { STACK_ITEM_NOTIFICATIONS_DATA } from '@/constants/data'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { Link } from 'expo-router'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = () => {
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
              <Image
                source={Cat}
                resizeMode="cover"
                className={cn(
                  'w-[34px] h-[34px] rounded-full',
                  colorScheme === 'dark' ? 'border-2 border-muted-3' : ''
                )}
              />

              <View className="flex-row items-center gap-[30px]">
                <SvgBadge
                  Svg={
                    <Notification
                      className={colorScheme === 'dark' ? 'text-muted' : ''}
                    />
                  }
                  badgeValue={223}
                />

                <Plus
                  className={cn(
                    'text-neon',
                    colorScheme === 'dark' ? 'text-muted-2' : ''
                  )}
                />
              </View>
            </>
          }
          firstFloorClassname="justify-between"
          secondFloor={
            <TypoText weight="bold" size="4xl">
              Home
            </TypoText>
          }
          withBorder
        />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 85 + insets.bottom,
          }}
        >
          <View className="flex flex-col gap-10 p-5">
            <Stack
              stackItemType="StackItem"
              stackItems={[
                {
                  Svg: <Issues />,
                  title: 'Issues',
                },
                {
                  Svg: <Projects />,
                  title: 'Projects',
                },
                {
                  Svg: <Organizations />,
                  title: 'Organizations (Clients)',
                },
                {
                  Svg: <Users />,
                  title: 'Users',
                },
                {
                  Svg: <Activity />,
                  title: 'Activity monitor',
                },
                {
                  Svg: <Screenshots />,
                  title: 'Screenshots',
                },
                {
                  Svg: <Contacts />,
                  title: 'Contacts',
                },
                {
                  Svg: <Shortcuts />,
                  title: 'Shortcuts',
                },
              ]}
            />

            <View className="flex flex-col gap-5">
              <TypoText weight="semibold" size="md">
                Recent
              </TypoText>

              <Stack
                stackItemBorder="full"
                stackItemType="StackItemRecent"
                stackItems={[
                  {
                    Svg: (
                      <Circle
                        className={colorScheme === 'dark' ? 'text-muted' : ''}
                      />
                    ),
                    organization: 'rminds',
                    project: 'solocrm-mobile',
                    desc: 'Filters of finished jobs (by status) - change a bit the logic.',
                    status: 'You commented',
                    time: 23,
                    total: 2,
                  },
                  {
                    Svg: (
                      <Circle
                        className={colorScheme === 'dark' ? 'text-muted' : ''}
                      />
                    ),
                    organization: 'rminds',
                    project: 'solocrm-mobile',
                    desc: 'Permissions on service level.',
                    status: 'You were assigned',
                    time: 15,
                  },
                  {
                    Svg: (
                      <Circle
                        className={colorScheme === 'dark' ? 'text-muted' : ''}
                      />
                    ),
                    organization: 'rminds',
                    project: 'solocrm-mobile',
                    desc: 'Page with list of colaborators (created in Centru de frezare).',
                    status: 'rminds',
                    time: 12,
                  },
                ]}
              />
            </View>

            <View className="flex flex-col gap-5">
              <TypoText weight="semibold" size="md">
                Shortcuts
              </TypoText>

              <Quickstart />
            </View>

            <View className="flex flex-col gap-5">
              <View className="flex flex-row justify-between">
                <TypoText weight="semibold" size="md">
                  Notifications
                </TypoText>

                <Link href={'/(root)/notifications'}>
                  <TypoText
                    weight="semibold"
                    color="neon"
                    size="md"
                    darkOverride="text-muted"
                  >
                    View all
                  </TypoText>
                </Link>
              </View>

              <Stack
                stackItemType="StackItemNotifications"
                stackItems={
                  STACK_ITEM_NOTIFICATIONS_DATA['Today, Apr 08, 2020']
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

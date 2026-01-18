import Cat from '@/assets/images/cat.png'
import Bold from '@/components/(text)/Bold'
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
import Cross from '@/components/icons/(stack)/Cross'
import Edit from '@/components/icons/(stack)/Edit'
import Plus2 from '@/components/icons/(stack)/Plus2'
import Tick from '@/components/icons/(stack)/Tick'
import SvgBadge from '@/components/icons/SvgBadge'
import Quickstart from '@/components/Quickstart'
import ScreenHeader from '@/components/ScreenHeader'
import Stack from '@/components/Stack'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
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
          className={colorScheme === 'dark' ? 'border-muted-3' : ''}
          style={{
            paddingTop: insets.top,
          }}
          firstFloor={
            <>
              <Image
                source={Cat}
                resizeMode="cover"
                className={cn(
                  'w-[34px] h-[34px] rounded-full',
                  colorScheme === 'dark' ? 'border-2 border-[#2F3030]' : ''
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
              className={colorScheme === 'dark' ? 'border-muted-3' : ''}
              stackItemClassname={
                colorScheme === 'dark' ? 'border-muted-3' : ''
              }
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
              <View className="flex flex-row justify-between">
                <TypoText weight="semibold" size="md">
                  Recent
                </TypoText>

                <TypoText
                  weight="semibold"
                  color="neon"
                  size="md"
                  darkOverride="text-muted"
                >
                  View all
                </TypoText>
              </View>

              <Stack
                className={colorScheme === 'dark' ? 'border-muted-3' : ''}
                stackItemClassname={
                  colorScheme === 'dark' ? 'border-muted-3' : ''
                }
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

              <Quickstart
                className={colorScheme === 'dark' ? 'border-muted-3' : ''}
              />
            </View>

            <View className="flex flex-col gap-5">
              <View className="flex flex-row justify-between">
                <TypoText weight="semibold" size="md">
                  Notifications
                </TypoText>

                <TypoText
                  weight="semibold"
                  color="neon"
                  size="md"
                  darkOverride="text-muted"
                >
                  View all
                </TypoText>
              </View>

              <Stack
                className={colorScheme === 'dark' ? 'border-muted-3' : ''}
                stackItemType="StackItemNotifications"
                stackItems={[
                  {
                    Svg: <Cross />,
                    message: (
                      <TypoText size="sm" className="w-full">
                        Invoice{' '}
                        <Bold>marked &quot;2020.0005.3381&quot; as</Bold>{' '}
                        Cancelled.
                      </TypoText>
                    ),
                    date: 'Apr 09, 2020 18:23',
                  },
                  {
                    Svg: <Plus2 />,
                    message: (
                      <TypoText size="sm" className="w-full">
                        New invoice{' '}
                        <Bold>
                          &quot;2020.0005.3381&quot; added to the project
                        </Bold>{' '}
                        Forus Platform.
                      </TypoText>
                    ),
                    date: 'Apr 09, 2020 18:23',
                  },
                  {
                    Svg: <Edit />,
                    message: (
                      <TypoText size="sm" className="w-full">
                        A new note was added to the project{' '}
                        <Bold>Corona Voucher</Bold> system.
                      </TypoText>
                    ),
                    date: 'Apr 09, 2020 18:23',
                  },
                  {
                    Svg: <Tick />,
                    message: (
                      <TypoText size="sm" className="w-full">
                        Status changed from <Bold>Concept to Closed</Bold> for
                        the project <Bold>1Language Contact Portal</Bold>.
                      </TypoText>
                    ),
                    date: 'Apr 09, 2020 18:23',
                  },
                ]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

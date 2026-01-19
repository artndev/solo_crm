import SearchIcon from '@/components/icons/(screen-header)/Search'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_SearchBarProps } from '@/types'
import { LegendList } from '@legendapp/list'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TypoText from './(text)/TypoText'
import ScreenHeader from './ScreenHeader'
import Back from './icons/(screen-header)/Back'
import Calendar from './icons/(screen-header)/Calendar'

const SearchBar = <T,>({
  flatListData,
  targetField,
  renderItem,
  withBorder = false,
  className,
  ...props
}: I_SearchBarProps<T>) => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { colorScheme } = useTheme()
  const [data, setData] = useState<T[]>(flatListData)
  const [target, setTarget] = useState<string>('')
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }

  useEffect(() => {
    if (target.trim().length === 0) {
      setData([])
      return
    }

    setData(() =>
      flatListData.filter(val => {
        const field = val[targetField] as string

        return field.trim().toLowerCase().includes(target.trim().toLowerCase())
      })
    )
  }, [target])

  return (
    <View className={cn('flex-1 flex flex-col gap-5', className)} {...props}>
      <ScreenHeader
        className="gap-5 px-5 pb-5"
        style={{
          paddingTop: insets.top + 10,
        }}
        firstFloorClassname="justify-between"
        firstFloor={
          <>
            <Pressable onPress={() => router.back()}>
              <Back className={colorScheme === 'dark' ? 'text-muted' : ''} />
            </Pressable>

            <View className="flex flex-col justify-center items-center">
              <TypoText weight="semibold" size="md">
                Notifications
              </TypoText>

              <TypoText weight="medium" color="neon">
                Find by context
              </TypoText>
            </View>

            <Back className="text-transparent" />
          </>
        }
        secondFloor={
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              className={cn(
                'flex flex-row items-center w-full min-h-[35px] border border-input rounded-[10px] px-3',
                colorScheme === 'dark' ? 'border-0 bg-muted-3' : ''
              )}
            >
              <View className="flex flex-row justify-center items-center size-[20px]">
                <SearchIcon className="text-muted" />
              </View>

              <TextInput
                placeholder="Search..."
                className={cn(
                  'flex-1 text-md font-sfpro-medium text-default placeholder:text-muted p-3',
                  colorScheme === 'dark' ? 'text-white' : ''
                )}
                onChangeText={setTarget}
                autoFocus={true}
              />

              <Pressable
                className="flex flex-row justify-center items-center size-[20px]"
                onPress={() => setDatePickerVisibility(prev => !prev)}
              >
                <Calendar className="text-muted" />
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        }
        withBorder
      />

      <LegendList
        contentContainerClassName="flex-1 px-5"
        ItemSeparatorComponent={() => (
          <View
            className={cn(
              'w-full h-[1px] bg-muted my-5',
              colorScheme === 'dark' ? 'bg-muted-3' : ''
            )}
          />
        )}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={() =>
          target.trim().length > 0 && (
            <View className="flex flex-row justify-center items-center w-full">
              <TypoText size="md" weight="medium">
                Nothing has been found so far {'=('}
              </TypoText>
            </View>
          )
        }
        recycleItems
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerComponentStyleIOS={{
          height: 200,
          alignSelf: 'center',
        }}
      />
    </View>
  )
}

export default SearchBar

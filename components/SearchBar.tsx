import SearchIcon from '@/components/icons/(screen-header)/Search'
import { useGradualAnimation } from '@/hooks/useGradualAnimation'
import { useTheme } from '@/hooks/useTheme'
import { cn, compareDates, formatDate } from '@/lib/utils'
import {
  I_SearchBarProps,
  StringKeys,
  T_BottomSheetControllerMethods,
  T_CheckboxGroupMethods,
  T_FilterButtonMethods,
} from '@/types'
import { LegendList } from '@legendapp/list'
import { useRouter } from 'expo-router'
import React, { useMemo, useRef, useState } from 'react'
import {
  Keyboard,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheetWithHeader from './(bottom-sheet)/BottomSheetWithHeader'
import FilterButton from './(bottom-sheet)/FilterButton'
import CheckboxGroup from './(groups)/CheckboxGroup'
import TypoText from './(text)/TypoText'
import Back from './icons/(screen-header)/Back'
import Calendar from './icons/(screen-header)/Calendar'
import Cross from './icons/(stack)/Cross'
import ScreenHeader from './ScreenHeader'

const SearchBar = <T, K extends StringKeys<T>>({
  flatListData,
  targetField,
  dateField,
  renderItem,
  withBorder = false,
  className,
  ...props
}: I_SearchBarProps<T, K>) => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { colorScheme } = useTheme()
  const { height } = useGradualAnimation()

  const bottomSheetRef = useRef<T_BottomSheetControllerMethods>(null)
  const filterButtonRef = useRef<T_FilterButtonMethods>(null)
  const checkboxGroupRef = useRef<T_CheckboxGroupMethods>(null)

  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false)

  const [target, setTarget] = useState<string>('')
  const [date, setDate] = useState<Date | undefined>(undefined)

  const keyboardPadding = useAnimatedStyle(() => {
    console.log(height.value)

    return {
      height: height.value,
    }
  }, [])

  const filteredData = useMemo(() => {
    return flatListData.filter(val => {
      const targetFieldVal = val[targetField] as string
      const dateFieldVal = val[dateField] as string

      if (
        !targetFieldVal
          .trim()
          .toLowerCase()
          .includes(target.trim().toLocaleLowerCase())
      ) {
        return false
      }

      if (!date) {
        return true
      }

      return compareDates(dateFieldVal, date)
    })
  }, [target, date])

  return (
    <View className={cn('flex-1 flex flex-col gap-5', className)} {...props}>
      <ScreenHeader
        className="gap-10 px-5 pb-5"
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
          <View className="flex flex-col items-start w-full gap-2">
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

            <FilterButton
              title="Expand"
              onPress={() => bottomSheetRef.current?.unfold()}
              ref={filterButtonRef}
            />

            {date && (
              <View className="flex flex-row items-center gap-4 w-auto p-3 border border-input rounded-[10px]">
                <TypoText>{formatDate(date)}</TypoText>

                <Pressable onPress={() => setDate(undefined)}>
                  <Cross />
                </Pressable>
              </View>
            )}
          </View>
        }
        withBorder
      />

      <LegendList
        contentContainerClassName="px-5"
        contentContainerStyle={{
          paddingBottom: insets.bottom + 10,
        }}
        ItemSeparatorComponent={() => (
          <View
            className={cn(
              'w-full h-[1px] bg-muted my-5',
              colorScheme === 'dark' ? 'bg-muted-3' : ''
            )}
          />
        )}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={() =>
          filteredData.length === 0 && (
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
        onConfirm={date => setDate(date)}
        onCancel={() => setDatePickerVisibility(false)}
        pickerComponentStyleIOS={{
          height: 200,
          alignSelf: 'center',
        }}
      />

      <BottomSheetWithHeader
        snapPoints={[500]}
        ref={bottomSheetRef}
        title="Filters"
        onLeftAction={() => bottomSheetRef.current?.fold()}
        onRightAction={() => {
          checkboxGroupRef.current?.clear()

          bottomSheetRef.current?.fold()
        }}
      >
        {/* <RadioButtonGroup
          radioButtons={[
            { value: 'Option 1' },
            { value: 'Option 2' },
            { value: 'Option 3' },
          ]}
          className="gap-10"
          dotClassname="bg-neon"
          activeClassname="border-neon"
          textProps={{
            weight: 'medium',
            size: 'md',
          }}
          // dividerComponent={<View className="w-full bg-muted h-[1px]" />}
          defaultValue="Option 1"
          onChangeValue={val => console.log(val)}
        /> */}

        <CheckboxGroup
          ref={checkboxGroupRef}
          checkboxes={[
            { value: 'Option 1' },
            { value: 'Option 2' },
            { value: 'Option 3' },
          ]}
          className="gap-10"
          tickClassname="text-neon"
          activeClassname="border-neon"
          textProps={{
            weight: 'medium',
            size: 'md',
          }}
          // dividerComponent={<View className="w-full bg-muted h-[1px]" />}
          defaultValues={[]}
          onChangeValue={val => console.log(val)}
          onChangeAmount={val => filterButtonRef.current?.set(val)}
        />

        <Animated.View style={keyboardPadding} />
      </BottomSheetWithHeader>
    </View>
  )
}

export default SearchBar

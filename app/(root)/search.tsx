import StackItemNotifications from '@/components/(stack)/StackItemNotifications'
import SearchBar from '@/components/SearchBar'
import { DATE, DATE_2, STACK_ITEM_NOTIFICATIONS_DATA } from '@/constants/data'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = () => {
  const insets = useSafeAreaInsets()

  return (
    <View className="w-full min-h-full">
      <SearchBar
        flatListData={[
          ...STACK_ITEM_NOTIFICATIONS_DATA[DATE],
          ...STACK_ITEM_NOTIFICATIONS_DATA[DATE_2],
        ]}
        targetField="message"
        dateField="date"
        renderItem={({ item, index }) => (
          <StackItemNotifications key={index} {...item} />
        )}
        withBorder
      />
    </View>
  )
}

export default Search

import StackItemNotifications from '@/components/(stack)/StackItemNotifications'
import SearchBar from '@/components/SearchBar'
import { STACK_ITEM_NOTIFICATIONS_DATA } from '@/constants/data'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = () => {
  const insets = useSafeAreaInsets()

  return (
    <View className="w-full min-h-full">
      <SearchBar
        flatListData={STACK_ITEM_NOTIFICATIONS_DATA['Today, Apr 08, 2020']}
        targetField="message"
        renderItem={({ item, index }) => (
          <StackItemNotifications key={index} {...item} />
        )}
        withBorder
      />
    </View>
  )
}

export default Search

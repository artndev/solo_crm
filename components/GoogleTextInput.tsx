import { cn } from '@/lib/utils'
import { GoogleInputProps } from '@/types/type'
import { Text, View } from 'react-native'

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={cn(
      'flex flex-row items-center justify-center relative z-50 rounded-xl mb-5',
      containerStyle
    )}
  >
    <Text>Search</Text>
  </View>
)

export default GoogleTextInput

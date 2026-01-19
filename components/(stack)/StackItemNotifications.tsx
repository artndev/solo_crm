import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_StackItemNotifications } from '@/types'
import { View } from 'react-native'
import TypoText from '../(text)/TypoText'
import Clock from '../icons/(stack)/Clock'
import MdContent from '../MdContent'

const StackItemNotifications: React.FC<I_StackItemNotifications> = ({
  Svg,
  message,
  date,
  className,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <View
      className={cn('flex flex-row gap-[12px] w-full min-h-[60px]', className)}
      {...props}
    >
      <View
        className={cn(
          'flex flex-row justify-center items-center size-[20px] rounded-full',
          colorScheme === 'dark' ? 'bg-white' : ''
        )}
      >
        {Svg}
      </View>

      <View className="flex-1 flex flex-col gap-[10px]">
        <View className="flex-1">
          <MdContent text={message} />
        </View>

        <View className="flex flex-row items-center gap-2">
          <Clock className={colorScheme === 'dark' ? 'text-muted' : ''} />

          <TypoText
            size="sm"
            weight="medium"
            className="text-card-date-time"
            darkOverride="text-muted"
          >
            {date}
          </TypoText>
        </View>
      </View>
    </View>
  )
}

export default StackItemNotifications

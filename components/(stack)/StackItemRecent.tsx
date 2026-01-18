import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_StackItemRecent } from '@/types'
import { View } from 'react-native'
import TypoText from '../(text)/TypoText'

const StackItemRecent: React.FC<I_StackItemRecent> = ({
  Svg,
  organization,
  project,
  desc,
  status,
  time,
  total,
  className,
  ...props
}) => {
  const { colorScheme } = useTheme()

  return (
    <View
      className={cn('flex flex-row gap-[12px] w-full min-h-[70px]', className)}
      {...props}
    >
      <View className="flex flex-row justify-center items-center size-[20px]">
        {Svg}
      </View>

      <View className="flex-1 flex flex-col gap-[10px]">
        <View className="flex flex-row gap-2">
          <TypoText
            size="sm"
            className="text-input-placeholder"
            darkOverride="text-muted"
          >
            {organization}
          </TypoText>

          <TypoText
            size="sm"
            className="text-card-divider"
            darkOverride="text-muted-2"
          >
            /
          </TypoText>

          <TypoText weight="bold" size="sm">
            {project}
          </TypoText>
        </View>

        <View className="flex-1">
          <TypoText weight="bold" className="w-full">
            {desc}
          </TypoText>
        </View>

        <TypoText
          size="sm"
          className="text-input-placeholder"
          darkOverride="text-muted"
        >
          {status}
        </TypoText>
      </View>

      <View className="flex flex-col justify-between items-end ml-auto">
        <TypoText
          weight="medium"
          size="sm"
          className="text-card-date-time"
          darkOverride="text-muted"
        >
          {time}m
        </TypoText>

        {total && (
          <View
            className={cn(
              'flex justify-center items-center min-w-[20px] h-[20px] bg-card-notification rounded-[4px] px-1.5',
              colorScheme === 'dark' ? 'bg-muted-2' : ''
            )}
          >
            <TypoText weight="semibold" size="sm">
              {total > 99 ? '99+' : total}
            </TypoText>
          </View>
        )}
      </View>
    </View>
  )
}

export default StackItemRecent

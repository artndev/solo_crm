import { cn } from '@/lib/utils'
import { I_StackItem } from '@/types'
import { View } from 'react-native'
import TypoText from '../(text)/TypoText'
import Arrow from '../icons/(other)/Arrow'

const StackItem: React.FC<I_StackItem> = ({
  Svg,
  title,
  className,
  ...props
}) => {
  return (
    <View
      className={cn(
        'flex flex-row justify-between items-center w-full min-h-[45px]',
        className
      )}
      {...props}
    >
      <View className="flex flex-row items-center gap-4">
        {Svg}

        <TypoText weight="semibold" className="text-md">
          {title}
        </TypoText>
      </View>

      <Arrow className="text-tab-non-active" />
    </View>
  )
}

export default StackItem

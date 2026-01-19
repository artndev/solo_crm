import { cn } from '@/lib/utils'
import { I_FilterButton } from '@/types'
import { useImperativeHandle, useRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import TypoText from '../(text)/TypoText'
import Filter from '../icons/(screen-header)/Filter'

const FilterButton = ({
  title,
  textProps,
  className,
  ref,
  children,
  ...props
}: I_FilterButton) => {
  const filterButtonRef = useRef<View>(null)
  const [total, setTotal] = useState<number>(0)

  useImperativeHandle(ref, () => {
    return {
      increment: () => setTotal(prev => prev + 1),
      decrement: () => setTotal(prev => Math.max(0, prev - 1)),
      set: (value: number) => setTotal(value),
    }
  }, [])

  return (
    <Pressable
      ref={filterButtonRef}
      className={cn(
        'flex flex-row justify-center items-center gap-2 rounded-[4px] p-1.5 border border-input',
        className,
        total > 0 ? 'bg-neon border-neon' : ''
      )}
      {...props}
    >
      {total > 0 && (
        <View className="flex justify-center items-center min-w-[20px] h-[20px] rounded-full px-1.5 bg-white">
          <TypoText
            weight="semibold"
            color="neon"
            className="text-sm text-center w-full"
          >
            {total}
          </TypoText>
        </View>
      )}

      <TypoText
        weight="semibold"
        {...textProps}
        color={total > 0 ? 'pale' : 'default'}
      >
        {title}
      </TypoText>

      <View className="flex justify-center items-end h-[20px]">
        <Filter className={total > 0 ? 'text-pale' : ''} />
      </View>
    </Pressable>
  )
}

export default FilterButton

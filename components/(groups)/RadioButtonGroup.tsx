import { cn } from '@/lib/utils'
import { I_RadioButtonGroupProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import TypoText from '../(text)/TypoText'

const RadioButtonGroup: React.FC<I_RadioButtonGroupProps> = ({
  radioButtons,
  defaultValue,
  textProps,
  dividerComponent,
  activeClassname,
  dotClassname,
  onChangeValue,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState<string>(defaultValue)

  useEffect(() => onChangeValue?.(selected), [selected])

  return (
    <View
      className={cn('flex flex-col items-start w-full gap-5', className)}
      {...props}
    >
      {radioButtons.map((val, i) => (
        <React.Fragment key={i}>
          <Pressable
            key={i}
            className="flex flex-row items-center gap-5"
            onPress={() => setSelected(val.value)}
          >
            <View
              className={cn(
                'flex justify-center items-center border border-muted rounded-full p-1.5',
                val.value === selected
                  ? cn('border-default', activeClassname)
                  : ''
              )}
            >
              <View
                className={cn(
                  'size-[8px] rounded-full',
                  val.value === selected
                    ? cn('bg-muted', dotClassname)
                    : 'bg-transparent'
                )}
              />
            </View>

            <TypoText {...textProps}>{val.value}</TypoText>
          </Pressable>

          {i !== radioButtons.length - 1 && dividerComponent}
        </React.Fragment>
      ))}
    </View>
  )
}

export default RadioButtonGroup

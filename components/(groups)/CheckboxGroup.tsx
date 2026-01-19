import { cn } from '@/lib/utils'
import { I_CheckboxGroupProps } from '@/types'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { Pressable, View } from 'react-native'
import TypoText from '../(text)/TypoText'
import Tick2 from '../icons/(screen-header)/Tick2'

const CheckboxGroup: React.FC<I_CheckboxGroupProps> = ({
  checkboxes,
  defaultValues,
  textProps,
  dividerComponent,
  activeClassname,
  tickClassname,
  onChangeValue,
  onChangeAmount,
  className,
  ref,
  ...props
}) => {
  const [selected, setSelected] = useState<Set<string>>(new Set(defaultValues))

  const handleAdd = (value: string) =>
    setSelected(prev => new Set([...prev, value]))

  const handleRemove = (value: string) =>
    setSelected(prev => new Set(Array.from(prev).filter(val => val !== value)))

  const handleClear = () => setSelected(new Set())

  useImperativeHandle(ref, () => {
    return {
      add: (value: string) => handleAdd(value),
      remove: (value: string) => handleRemove(value),
      clear: () => handleClear(),
    }
  }, [])

  useEffect(() => {
    onChangeValue?.(Array.from(selected))
    onChangeAmount?.(selected.size)
  }, [selected])

  return (
    <View
      className={cn('flex flex-col items-start w-full gap-5', className)}
      {...props}
    >
      {checkboxes.map((val, i) => (
        <>
          <Pressable
            key={i}
            className="flex flex-row items-center gap-5"
            onPress={() => {
              if (!selected.has(val.value)) {
                handleAdd(val.value)
                return
              }

              handleRemove(val.value)
            }}
          >
            <View
              className={cn(
                'flex justify-center items-center border border-muted rounded-[4px]',
                selected.has(val.value)
                  ? cn('border-default', activeClassname)
                  : ''
              )}
            >
              <Tick2
                width={20}
                height={20}
                className={cn(
                  'size-[8px]',
                  selected.has(val.value)
                    ? cn('text-muted', tickClassname)
                    : 'text-transparent'
                )}
              />
            </View>

            <TypoText {...textProps}>{val.value}</TypoText>
          </Pressable>

          {i !== checkboxes.length - 1 && dividerComponent}
        </>
      ))}
    </View>
  )
}

export default CheckboxGroup

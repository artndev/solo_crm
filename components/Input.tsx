import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_InputProps } from '@/types'
import { cva } from 'class-variance-authority'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Eye from './icons/Eye'
import EyeClosed from './icons/EyeClosed'

const borderVariants = cva('border-input', {
  variants: {
    theme: {
      light: '',
      dark: '',
    },
    focused: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      theme: 'light',
      class: 'border-neon',
      focused: true,
    },
    {
      theme: 'dark',
      class: 'border-pale',
      focused: true,
    },
  ],
  defaultVariants: {
    theme: 'light',
    focused: false,
  },
})

const colorVariants = cva('placeholder:text-input-placeholder', {
  variants: {
    theme: {
      light: 'text-default',
      dark: 'text-pale',
    },
  },
  defaultVariants: {
    theme: 'light',
  },
})

const Input: React.FC<I_InputProps> = ({
  control,
  name,
  isSecured,
  placeholder,
  onFocus,
  onBlur,
  ...props
}) => {
  const { colorScheme } = useTheme()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(false)

  return (
    <View
      className={cn(
        'flex flex-row justify-between items-end gap-1 w-full border-b pb-2',
        borderVariants({ theme: colorScheme, focused: isFocused })
      )}
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={cn(
              'flex-1 text-md font-sfpro-medium pb-0',
              colorVariants({ theme: colorScheme })
            )}
            secureTextEntry={isSecureTextEntry}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={() => {
              setIsFocused(false)

              onBlur()
            }}
            onFocus={e => {
              setIsFocused(true)

              if (!onFocus) {
                return
              }

              onFocus(e)
            }}
            value={value}
            {...props}
          />
        )}
        name={name}
      />

      {isSecured && (
        <TouchableOpacity
          className="flex justify-center items-center"
          onPress={() => setIsSecureTextEntry(prev => !prev)}
        >
          {isSecureTextEntry ? (
            <EyeClosed
              width={20}
              height={20}
              className={colorVariants({ theme: colorScheme })}
            />
          ) : (
            <Eye
              width={20}
              height={20}
              className={colorVariants({ theme: colorScheme })}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Input

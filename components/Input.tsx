import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { I_InputProps } from '@/types'
import { cva } from 'class-variance-authority'
import React, { useState } from 'react'
import { Controller, FieldError } from 'react-hook-form'
import { TextInput, TouchableOpacity, View } from 'react-native'
import TypoText from './(text)/TypoText'
import Eye from './icons/(other)/Eye'
import EyeClosed from './icons/(other)/EyeClosed'

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
  const [fieldError, setFieldError] = useState<FieldError | undefined>(
    undefined
  )

  return (
    <View className="flex flex-col gap-2 w-full">
      <Controller
        control={control}
        rules={{
          required: 'Required',
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          setFieldError(error)

          return (
            <View
              className={cn(
                'flex flex-row justify-between items-end gap-2 w-full border-b pb-2',
                borderVariants({ theme: colorScheme, focused: isFocused })
              )}
            >
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
                  onFocus?.(e)
                }}
                value={value}
                {...props}
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
        }}
        name={name}
      />

      {fieldError && (
        <TypoText weight="bold" color="danger" className="text-sm">
          {fieldError.message}
        </TypoText>
      )}
    </View>
  )
}

export default Input

import { useTheme } from '@/hooks/useTheme'
import React, { useState } from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import Eye from './icons/Eye'
import EyeClosed from './icons/EyeClosed'

const Input: React.FC<TextInputProps> = ({ onFocus, onBlur, ...props }) => {
  const { theme } = useTheme()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(false)

  return (
    <View
      className="flex flex-row items-end gap-1 w-[200px] border-b pb-2"
      style={{
        borderColor: isFocused ? theme.borderFocusedInput : theme.borderInput,
      }}
    >
      <TextInput
        className="flex-1 text-xl font-sfpro-medium"
        secureTextEntry={isSecureTextEntry}
        cursorColor={isFocused ? theme.borderFocusedInput : theme.borderInput}
        style={{
          color: theme.textInput,
          paddingBottom: 0,
        }}
        {...props}
        onBlur={e => {
          setIsFocused(false)

          if (!onBlur) {
            return
          }

          onBlur(e)
        }}
        onFocus={e => {
          setIsFocused(true)

          if (!onFocus) {
            return
          }

          onFocus(e)
        }}
      />

      <TouchableOpacity
        className="flex justify-center items-center"
        onPress={() => setIsSecureTextEntry(prev => !prev)}
      >
        {isSecureTextEntry ? (
          <EyeClosed width={20} height={20} color={theme.inputIconColor} />
        ) : (
          <Eye width={20} height={20} color={theme.inputIconColor} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Input

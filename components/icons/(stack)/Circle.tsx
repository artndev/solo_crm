import tw from '@/lib/tw'
import React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Circle: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      color={(style?.color as ColorValue) || color || '#150AE9'}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M0.75 8.75C0.75 10.8717 1.59285 12.9066 3.09315 14.4069C4.59344 15.9071 6.62827 16.75 8.75 16.75C10.8717 16.75 12.9066 15.9071 14.4069 14.4069C15.9071 12.9066 16.75 10.8717 16.75 8.75C16.75 6.62827 15.9071 4.59344 14.4069 3.09315C12.9066 1.59285 10.8717 0.75 8.75 0.75C6.62827 0.75 4.59344 1.59285 3.09315 3.09315C1.59285 4.59344 0.75 6.62827 0.75 8.75V8.75Z" />
      <Path
        d="M6.75 8.75C6.75 9.28043 6.96071 9.78914 7.33579 10.1642C7.71086 10.5393 8.21957 10.75 8.75 10.75C9.28043 10.75 9.78914 10.5393 10.1642 10.1642C10.5393 9.78914 10.75 9.28043 10.75 8.75C10.75 8.21957 10.5393 7.71086 10.1642 7.33579C9.78914 6.96071 9.28043 6.75 8.75 6.75C8.21957 6.75 7.71086 6.96071 7.33579 7.33579C6.96071 7.71086 6.75 8.21957 6.75 8.75Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default Circle

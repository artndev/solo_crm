import React from 'react'
import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

const Projects: React.FC<SvgProps> = ({ className, ...props }) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      stroke="#FFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Rect width={32} height={32} rx={6} fill="#4B8DF7" stroke="none" />

      <Path d="M8.5 12.4993H23.5V22.4993H8.5V12.4993Z" />
      <Path d="M12.5 12.4993V22.4993" />
      <Path d="M19.5 12.4993V22.4993" />
      <Path d="M18.5 12.4993V10.4993C18.5 10.2341 18.3946 9.97976 18.2071 9.79222C18.0196 9.60469 17.7652 9.49933 17.5 9.49933H14.5C14.2348 9.49933 13.9804 9.60469 13.7929 9.79222C13.6054 9.97976 13.5 10.2341 13.5 10.4993V12.4993" />
    </Svg>
  )
}

export default Projects

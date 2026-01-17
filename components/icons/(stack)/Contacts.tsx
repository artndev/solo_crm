import React from 'react'
import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

const Contacts: React.FC<SvgProps> = props => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Rect width="32" height="32" rx="6" fill="#E62043" />

      <Path
        d="M24 14.2879V22.8575C24 23.1605 23.8796 23.4511 23.6653 23.6654C23.4509 23.8797 23.1602 24.0001 22.8571 24.0001H9.14286C8.83975 24.0001 8.54906 23.8797 8.33474 23.6654C8.12041 23.4511 8 23.1605 8 22.8575V14.2879L14.5882 19.5127C14.9908 19.8288 15.488 20.0007 16 20.0007C16.512 20.0007 17.0092 19.8288 17.4118 19.5127L24 14.2879Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 14.2865L17.6709 8.72584C17.457 8.49679 17.1983 8.31416 16.9109 8.1893C16.6234 8.06443 16.3134 8 16 8C15.6866 8 15.3766 8.06443 15.0891 8.1893C14.8017 8.31416 14.543 8.49679 14.3291 8.72584L8 14.2865"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8939 18.33L21.1357 20.5714"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1049 18.33L10.8631 20.5714"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Contacts

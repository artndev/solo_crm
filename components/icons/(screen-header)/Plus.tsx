import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Plus: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      color={(style?.color as ColorValue) || color || '#000'}
      className={className}
      {...props}
    >
      <Path
        d="M0.625 9.62552C0.625 12.0126 1.57327 14.3019 3.26119 15.9898C4.94911 17.6778 7.23843 18.626 9.62552 18.626C12.0126 18.626 14.3019 17.6778 15.9898 15.9898C17.6778 14.3019 18.626 12.0126 18.626 9.62552C18.626 7.23843 17.6778 4.94911 15.9898 3.26119C14.3019 1.57327 12.0126 0.625 9.62552 0.625C7.23843 0.625 4.94911 1.57327 3.26119 3.26119C1.57327 4.94911 0.625 7.23843 0.625 9.62552V9.62552Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.62561 6.02527V13.2257"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.02545 9.62552H13.2259"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Plus

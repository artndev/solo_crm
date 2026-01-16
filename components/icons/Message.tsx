import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Message: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke={(style?.color as ColorValue) || stroke || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.54819 17.7152L3.66665 20.1667L4.34675 15.8713C2.73339 14.3843 1.83331 12.3187 1.83331 10.0351C1.83331 5.50539 5.37486 1.83334 11 1.83334C16.6251 1.83334 20.1666 5.50539 20.1666 10.0351C20.1666 14.5648 16.6251 18.2369 11 18.2369C9.73925 18.2369 8.58318 18.0524 7.54819 17.7152Z"
      />
      <Path d="M7.33734 10.0833H7.33331" />
      <Path d="M11.004 10.0833H11" />
      <Path d="M14.6707 10.0833H14.6666" />
    </Svg>
  )
}

export default Message

import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

const Eye: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={(style?.color as ColorValue) || stroke || '#000'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <Circle cx="12" cy="12" r="3" />
    </Svg>
  )
}

export default Eye

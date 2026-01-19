import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Filter: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      color={(style?.color as ColorValue) || color || '#3B4356'}
      stroke={'currentColor'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M10.5 9.33335L7 12.8334L3.5 9.33335M3.5 4.66669L7 1.16669L10.5 4.66669" />
    </Svg>
  )
}

export default Filter

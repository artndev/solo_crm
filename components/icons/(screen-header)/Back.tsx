import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Back: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      color={(style?.color as ColorValue) || color || '#3B4356'}
      stroke={'currentColor'}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M18.625 9.625H0.625" />
      <Path d="M9.625 0.625L0.625 9.625L9.625 18.625" />
    </Svg>
  )
}

export default Back

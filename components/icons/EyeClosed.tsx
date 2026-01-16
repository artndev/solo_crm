import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const EyeClosed: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
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
      <Path d="m15 18-.722-3.25" />
      <Path d="M2 8a10.645 10.645 0 0 0 20 0" />
      <Path d="m20 15-1.726-2.05" />
      <Path d="m4 15 1.726-2.05" />
      <Path d="m9 18 .722-3.25" />
    </Svg>
  )
}

export default EyeClosed

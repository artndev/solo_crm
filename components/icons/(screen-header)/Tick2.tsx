import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Tick2: React.FC<SvgProps & { className?: string }> = ({
  color,
  className,
  ...props
}) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width={24}
      height={24}
      viewBox="-2.4 -2.4 28.8 28.8"
      fill="none"
      color={(style?.color as ColorValue) || color || '#000'}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path
        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
        stroke="currentColor"
      />
    </Svg>
  )
}

export default Tick2

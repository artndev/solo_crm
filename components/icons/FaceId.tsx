import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const FaceId: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={(style?.color as ColorValue) || stroke || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M6.875 15.4743C8.00284 16.5023 9.47392 17.0721 11 17.0721C12.5261 17.0721 13.9972 16.5023 15.125 15.4743" />
      <Path d="M6.1875 6.072V8.1345" />
      <Path d="M15.8125 6.072V8.1345" />
      <Path d="M11 6.072V10.8845C11 11.2492 10.8551 11.5989 10.5973 11.8568C10.3394 12.1146 9.98967 12.2595 9.625 12.2595H8.9375" />
      <Path d="M21.3125 17.072V19.822C21.3125 20.1867 21.1676 20.5364 20.9098 20.7943C20.6519 21.0521 20.3022 21.197 19.9375 21.197H17.1875" />
      <Path d="M17.1875 0.572H19.9375C20.3022 0.572 20.6519 0.716866 20.9098 0.974728C21.1676 1.23259 21.3125 1.58233 21.3125 1.947V4.697" />
      <Path d="M0.6875 4.697V1.947C0.6875 1.58233 0.832366 1.23259 1.09023 0.974728C1.34809 0.716866 1.69783 0.572 2.0625 0.572H4.8125" />
      <Path d="M4.8125 21.197H2.0625C1.69783 21.197 1.34809 21.0521 1.09023 20.7943C0.832366 20.5364 0.6875 20.1867 0.6875 19.822V17.072" />
    </Svg>
  )
}

export default FaceId

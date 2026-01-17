import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Notification: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      stroke={(style?.color as ColorValue) || stroke || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M6.84857 17.6756C6.95696 18.0218 7.18204 18.3257 7.49009 18.5419C7.79815 18.7581 8.17262 18.875 8.55744 18.875C8.94226 18.875 9.31673 18.7581 9.62478 18.5419C9.93284 18.3257 10.1579 18.0218 10.2663 17.6756" />
      <Path d="M8.5553 2.67507V0.875" />
      <Path d="M8.55529 2.67508C10.2527 2.67508 11.8807 3.30724 13.081 4.43251C14.2812 5.55777 14.9555 7.08395 14.9555 8.67531C14.9555 14.3123 16.2356 15.2756 16.2356 15.2756H0.875C0.875 15.2756 2.15505 13.7427 2.15505 8.67531C2.15505 7.08395 2.82936 5.55777 4.02964 4.43251C5.22992 3.30724 6.85784 2.67508 8.55529 2.67508V2.67508Z" />
    </Svg>
  )
}

export default Notification

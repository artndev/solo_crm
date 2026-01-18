import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Mail: React.FC<SvgProps> = ({ stroke, className, ...props }) => {
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
      <Path d="M22.8702 9.52089V21.304C22.8702 21.7207 22.7046 22.1203 22.41 22.4149C22.1154 22.7096 21.7158 22.8751 21.2991 22.8751H2.44608C2.02941 22.8751 1.6298 22.7096 1.33516 22.4149C1.04052 22.1203 0.875 21.7207 0.875 21.304V9.52089L9.93177 16.7049C10.4853 17.1397 11.1688 17.376 11.8726 17.376C12.5764 17.376 13.2599 17.1397 13.8134 16.7049L22.8702 9.52089Z" />
      <Path d="M22.8702 9.51897L14.1695 1.87302C13.8755 1.55809 13.5199 1.30698 13.1248 1.13529C12.7296 0.963597 12.3034 0.875 11.8726 0.875C11.4418 0.875 11.0155 0.963597 10.6204 1.13529C10.2253 1.30698 9.86965 1.55809 9.57566 1.87302L0.875 9.51897" />
      <Path d="M15.8508 15.0788L18.9327 18.1606" />
      <Path d="M7.89275 15.0788L4.81091 18.1606" />
    </Svg>
  )
}

export default Mail

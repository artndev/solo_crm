import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Calendar: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      color={(style?.color as ColorValue) || color || '#1A1F35'}
      stroke={'currentColor'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <Path d="M14.1667 1.66663V4.16663" />
      <Path d="M5.8335 1.66663V4.16663" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.80332 4.16663H16.1968C16.9398 4.16663 17.2092 4.23584 17.4808 4.3658C17.7524 4.49577 17.9655 4.68649 18.1108 4.9295C18.2561 5.17252 18.3334 5.41357 18.3334 6.07829V16.4216C18.3334 17.0864 18.2561 17.3274 18.1108 17.5704C17.9655 17.8134 17.7524 18.0042 17.4808 18.1341C17.2092 18.2641 16.9398 18.3333 16.1968 18.3333H3.80332C3.06039 18.3333 2.79098 18.2641 2.51938 18.1341C2.24777 18.0042 2.03461 17.8134 1.88936 17.5704C1.7441 17.3274 1.66675 17.0864 1.66675 16.4216V6.07829C1.66675 5.41357 1.7441 5.17252 1.88936 4.9295C2.03461 4.68649 2.24777 4.49577 2.51938 4.3658C2.79098 4.23584 3.06039 4.16663 3.80332 4.16663Z"
      />
      <Path d="M5.83716 7.91663H5.8335" />
      <Path d="M10.0073 7.91663H10.0037" />
      <Path d="M14.1777 7.91663H14.1741" />
      <Path d="M5.83716 11.25H5.8335" />
      <Path d="M10.0073 11.25H10.0037" />
      <Path d="M14.1777 11.25H14.1741" />
      <Path d="M5.83716 14.5833H5.8335" />
      <Path d="M10.0073 14.5833H10.0037" />
    </Svg>
  )
}

export default Calendar

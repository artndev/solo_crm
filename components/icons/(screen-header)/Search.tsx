import tw from '@/lib/tw'
import { ColorValue } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Search: React.FC<SvgProps> = ({ color, className, ...props }) => {
  const style = tw`${className || ''}`

  return (
    <Svg
      width="20"
      height="20"
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
      <Path d="M0.875 8.12541C0.875 10.0483 1.63888 11.8925 2.9986 13.2522C4.35831 14.6119 6.20248 15.3758 8.12541 15.3758C10.0483 15.3758 11.8925 14.6119 13.2522 13.2522C14.6119 11.8925 15.3758 10.0483 15.3758 8.12541C15.3758 6.20248 14.6119 4.35831 13.2522 2.9986C11.8925 1.63888 10.0483 0.875 8.12541 0.875C6.20248 0.875 4.35831 1.63888 2.9986 2.9986C1.63888 4.35831 0.875 6.20248 0.875 8.12541V8.12541Z" />
      <Path d="M13.2517 13.2517L18.8749 18.8757" />
    </Svg>
  )
}

export default Search

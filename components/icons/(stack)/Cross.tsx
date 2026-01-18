import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Cross: React.FC<SvgProps> = props => {
  return (
    <Svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <Path
        d="M10.3906 1.446L8.93611 0L5.19529 3.71899L1.45448 0L0 1.446L3.74081 5.16499L0 8.884L1.45448 10.33L5.19529 6.61099L8.93611 10.33L10.3906 8.884L6.64977 5.16499L10.3906 1.446Z"
        fill="#E34250"
      />
    </Svg>
  )
}

export default Cross

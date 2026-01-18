import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Plus2: React.FC<SvgProps> = props => {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
      <Path
        d="M12.6377 7.30402V5.259H7.34785V0H5.29085V5.259H0V7.30402H5.28985V12.563H7.34785V7.30402H12.6377Z"
        fill="#586ADA"
      />
    </Svg>
  )
}

export default Plus2

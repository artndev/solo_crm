import React from 'react'
import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

const Screenshots: React.FC<SvgProps> = props => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Rect width="32" height="32" rx="6" fill="#F7CD4A" />

      <Path
        d="M8 7.98999H24V23.99H8V7.98999Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2 19.7233L13.6619 16.4408C13.7536 16.3185 13.8704 16.2173 14.0046 16.1441C14.1388 16.0709 14.2872 16.0274 14.4397 16.0166C14.5921 16.0057 14.7452 16.0278 14.8884 16.0812C15.0316 16.1347 15.1616 16.2183 15.2697 16.3263L16 17.0567L18.3467 13.9278C18.446 13.7953 18.5749 13.6878 18.723 13.6137C18.8711 13.5397 19.0344 13.5011 19.2 13.5011C19.3656 13.5011 19.5289 13.5397 19.677 13.6137C19.8252 13.6878 19.954 13.7953 20.0533 13.9278L21.952 16.4593"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6667 11.99C10.6667 12.3436 10.8072 12.6828 11.0572 12.9328C11.3073 13.1829 11.6464 13.3233 12 13.3233C12.3536 13.3233 12.6928 13.1829 12.9428 12.9328C13.1929 12.6828 13.3334 12.3436 13.3334 11.99C13.3334 11.6364 13.1929 11.2973 12.9428 11.0472C12.6928 10.7972 12.3536 10.6567 12 10.6567C11.6464 10.6567 11.3073 10.7972 11.0572 11.0472C10.8072 11.2973 10.6667 11.6364 10.6667 11.99Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 19.7233H24"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Screenshots

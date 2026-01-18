import { I_TypoTextProps } from '@/types'
import React from 'react'
import TypoText from './TypoText'

const Bold: React.FC<I_TypoTextProps> = ({ children, ...props }) => {
  return (
    <TypoText color="inherit" size="inherit" weight="bold" {...props}>
      {children}
    </TypoText>
  )
}

export default Bold

import { I_MdContentProps, I_TypoTextProps } from '@/types'
import React, { ReactNode } from 'react'
import { View } from 'react-native'
import Markdown, { Renderer } from 'react-native-marked'
import TypoText from './(text)/TypoText'

class SimpleRenderer extends Renderer {
  private extra?: I_TypoTextProps

  constructor(extra?: I_TypoTextProps) {
    super()
    this.extra = extra
  }

  paragraph(children: ReactNode[]) {
    return <React.Fragment key={this.getKey()}>{children}</React.Fragment>
  }

  text(text: string | ReactNode[]): ReactNode {
    return (
      <TypoText key={this.getKey()} {...this.extra}>
        {text}
      </TypoText>
    )
  }

  strong(children: string | ReactNode[]): ReactNode {
    return (
      <TypoText key={this.getKey()} weight="bold" {...this.extra}>
        {children}
      </TypoText>
    )
  }

  heading() {
    return null
  }

  link() {
    return null
  }

  image() {
    return null
  }

  list() {
    return null
  }

  listItem() {
    return null
  }

  blockquote() {
    return null
  }
  code() {
    return null
  }

  codespan() {
    return null
  }

  em() {
    return null
  }

  del() {
    return null
  }

  html() {
    return null
  }

  hr() {
    return null
  }
}

const MdContent: React.FC<I_MdContentProps> = ({
  text,
  textProps,
  containerProps,
}) => {
  const renderer = new SimpleRenderer(textProps)

  return (
    <View {...containerProps}>
      <Markdown
        value={text}
        renderer={renderer}
        flatListProps={{
          scrollEnabled: false,
          style: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </View>
  )
}

export default MdContent

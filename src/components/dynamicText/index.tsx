import { ReactElement } from 'react'
import { texts } from '../../common'

export interface props {
  weight: 'normal' | 'bold' | 'extraBold'
  type: 'h1' | 'h2' | 'normal' | 'small' | 'tiny'
  color?: string
  content: string
  className?: string // TODO test this new prop
}

export const DynamicText = ({ content, type, color, weight, className }: props): ReactElement => {
  if (type === 'h1') {
    return (
      <h1 className={className} style={{ color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight] }}>{content}</h1>
    )
  }
  if (type === 'h2') {
    return (
      <h2 className={className} style={{ color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight] }}>{content}</h2>
    )
  }
  return (
    <p className={className} style={{ color, fontSize: texts.textSize[type], fontWeight: texts.textWeight[weight] }}>{content}</p>
  )
}

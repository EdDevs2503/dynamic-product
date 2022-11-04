import { ReactElement, SyntheticEvent } from 'react'
import { colors } from '../../common'
import { DynamicText } from '../dynamicText'

export interface props {
  content: string
  isBG: boolean
  onClick: (event: SyntheticEvent) => void
}

export const Button = ({ content, isBG, onClick }: props): ReactElement => {
  return (
    <button
        onClick={onClick}
        className='w-44 h-10 rounded border'
        style={{ borderColor: colors.blue, backgroundColor: isBG ? colors.blue : 'transparent' }}
    >
        <DynamicText type="normal" color={isBG ? colors.white : colors.blue} weight="extraBold" content={content} />
    </button>
  )
}

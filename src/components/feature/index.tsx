import { ReactElement, SVGProps } from 'react'
import { colors } from '../../common'
import { DynamicText } from '../dynamicText'

export interface props {
  title: string
  description: string
  Icon: (params: SVGProps<SVGSVGElement>) => ReactElement
}

export const Feature = ({ title, description, Icon }: props): ReactElement => {
  return (
    <div className='flex flex-col justify-between items-center space-y-2 max-[760px]:mb-4'>
        <div className='flex h-11 items-center justify-center'>
          <Icon fill={colors.blue} />
        </div>
        <div className='flex flex-col items-center'>
            <DynamicText type='h2' color={colors.blue} content={title} weight="bold" />
            <DynamicText type='normal' color={colors.black} content={description} weight="normal" />
        </div>
    </div>
  )
}

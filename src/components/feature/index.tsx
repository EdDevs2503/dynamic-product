import { ReactElement, SVGProps } from 'react'
import { colors } from '../../common'
import DynamicText from '../dynamicText'

export interface props {
  title: string
  description: string
  Icon: (params: SVGProps<SVGSVGElement>) => ReactElement
}

const Feature = ({ title, description, Icon }: props): ReactElement => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <Icon fill={colors.blue} />
        <div className='flex flex-col items-center'>
            <DynamicText type='h2' content={title} weight="bold" />
            <DynamicText type='normal' content={description} weight="normal" />
        </div>
    </div>
  )
}

export default Feature

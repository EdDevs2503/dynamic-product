import { ReactElement } from 'react'
import { colors } from '../../common'
import { DynamicText } from '../dynamicText'

export interface props {
  offerPrice: number
  fullPrice: number
}

export const Price = ({ offerPrice, fullPrice }: props): ReactElement => {
  return (
    <div className='flex flex-col items-center space-y-1'>
        <div className='px-6 py-2 rounded inline-block' style={{ backgroundColor: colors.aqua }}>
            <DynamicText type='normal' weight='bold' content={`Today’s Total*: $${offerPrice}`} />
        </div>
        <div className='flex justify-items-center space-x-1'>
            <DynamicText type='tiny' weight='normal' content={'After the first billing cycle, your new plan will renew at'} />
            <DynamicText type='tiny' weight='bold' content={`$${fullPrice} / term`} />
        </div>
    </div>
  )
}

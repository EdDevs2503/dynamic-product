import { ReactElement } from 'react'
import { colors, texts } from '../../common'
import { DynamicText } from '../dynamicText'

export interface PricePropTypes {
  offerPrice: number
  fullPrice: number
}

export const Price = ({ offerPrice, fullPrice }: PricePropTypes): ReactElement => {
  return (
    <div className='flex flex-col items-center space-y-1'>
        <div className='px-6 py-2 rounded inline-block' style={{ backgroundColor: colors.aqua }}>
            <DynamicText type='normal' weight='bold' color={colors.black} content={`Today’s Total*: $${offerPrice}`} />
        </div>
        <div className='flex justify-items-center space-x-1'>
            <p style={{
              color: colors.black,
              fontWeight: texts.textWeight.normal,
              fontSize: texts.textSize.tiny,
              textAlign: 'center'
            }}>
              After the first billing cycle, your new plan will renew at <span style={{ fontWeight: texts.textWeight.bold }}>{`$${fullPrice} / term`}</span>
            </p>
        </div>
    </div>
  )
}

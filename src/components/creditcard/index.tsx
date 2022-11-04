import { ReactElement } from 'react'
import { colors } from '../../common'
import { DynamicText } from '../dynamicText'
import { SvgMasterCard, SvgVisa } from '../icons'

export interface CreditCardPropTypes {
  from: 'VISA' | 'MasterCard'
  lastDigits: number
}

export const CreditCard = ({ from, lastDigits }: CreditCardPropTypes): ReactElement => {
  return (
    <div className='flex space-x-0.5 align-items-center'>
        {
            from === 'VISA' && (
                <SvgVisa />
            )
        }
                {
            from === 'MasterCard' && (
                <SvgMasterCard
                    width={34}
                    height={24}
                />
            )
        }
        <DynamicText weight='normal' type='normal' color={colors.blue} content={`•••• •••• •••• ${lastDigits}`} />
    </div>
  )
}

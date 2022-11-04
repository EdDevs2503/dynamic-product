import { ReactElement } from 'react'
import { DynamicText } from '../dynamicText'
import { SvgMasterCard, SvgVisa } from '../icons'

export interface props {
  from: 'VISA' | 'MasterCard'
  lastDigits: number
}

export const CreditCard = ({ from, lastDigits }: props): ReactElement => {
  return (
    <div className='flex inline-block space-x-0.5 align-items-center'>
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
        <DynamicText weight='normal' type='normal' content={`•••• •••• •••• ${lastDigits}`} />
    </div>
  )
}

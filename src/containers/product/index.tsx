import { ReactElement, SyntheticEvent } from 'react'
import { colors } from '../../common'
import { Button, CreditCard, DynamicText, Feature, Price } from '../../components'
import { SvgTriangule } from '../../components/icons'

export interface ProductPropsType {
  title: string
  description: string
  features: Feature.props[]
  onTerms: (event: SyntheticEvent) => void
  onCancel: (event: SyntheticEvent) => void
  onContinue: (event: SyntheticEvent) => void
}

export const Product = ({ title, description, features, onTerms, onCancel, onContinue }: ProductPropsType): ReactElement => {
  return (
        <div style={{ backgroundColor: colors.white }} className="p-6 max-w-6xl w-screen my-3 items-center flex-col rounded-lg">
            <DynamicText.DynamicText
                color={colors.blue}
                type="h1"
                weight="normal"
                className='text-center mb-4'
                content={title}
            />
            <DynamicText.DynamicText
                color={colors.black}
                type="normal"
                weight="normal"
                className='text-center mb-6'
                content={description}
            />
            <div className='flex justify-evenly flex-wrap max-[425px]:justify-center mb-11 items-center'>
                {
                    features.map((props: Feature.props, index: number) => {
                      return (
                        <Feature.Feature {...props} key={index} />
                      )
                    })
                }
            </div>
            <Price.Price offerPrice={6.99} fullPrice={9.99} />
            <div className='flex mt-6 flex-wrap max-[425px]:flex-col space-y-1 space-x-1 items-center mb-2'>
                <DynamicText.DynamicText
                    color={colors.black}
                    type="small"
                    weight="normal"
                    className='text-center'
                    content="By selecting buy now, you agree to purchasing this product with"
                />
                <CreditCard.CreditCard from='VISA' lastDigits={1234} />
                <div className='flex space-x-1 items-center' onClick={onTerms}>
                    <DynamicText.DynamicText
                        color={colors.blue}
                        type="small"
                        weight="normal"
                        className='text-center '
                        content="Additional Terms"
                    />
                    <SvgTriangule />
                </div>
            </div>
            <div className='flex justify-end max-[760px]:space-y-2 min-[760px]:space-x-2 max-[760px]:flex-col'>
                <Button.Button content='CANCEL' isBG={false} onClick={onCancel} />
                <Button.Button content='ADD NOW' isBG onClick={onContinue} />
            </div>
        </div>
  )
}

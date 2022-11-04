import { render, screen } from '@testing-library/react'
import { Price, props } from './index'

describe('Price component', () => {
  test('Is offer price is rendering', () => {
    const fakeProps: props = {
      offerPrice: 6.99,
      fullPrice: 9.99
    }
    render(<Price {...fakeProps} />)
    const text = screen.getByText(`Today’s Total*: $${fakeProps.offerPrice}`)
    expect(text).toBeInTheDocument()
  })

  test('Is full price is rendering', () => {
    const fakeProps: props = {
      offerPrice: 6.99,
      fullPrice: 9.99
    }
    render(<Price {...fakeProps} />)
    const text = screen.getByText(`$${fakeProps.fullPrice} / term`)
    expect(text).toBeInTheDocument()
  })
})

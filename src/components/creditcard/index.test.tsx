import { render, screen } from '@testing-library/react'
import CreditCard, { props } from './index'

describe('Test CreditCard component', () => {
  test('Test if VISA icon is rendering', () => {
    const fakeProps: props = {
      from: 'VISA',
      lastDigits: 1234
    }

    const { container } = render(<CreditCard {...fakeProps} />)
    const icon = container.querySelector("[data-icon='visa']")

    expect(icon).toBeInTheDocument()
  })

  test('Test if MasterCard icon is rendering', () => {
    const fakeProps: props = {
      from: 'MasterCard',
      lastDigits: 1234
    }

    const { container } = render(<CreditCard {...fakeProps} />)
    const icon = container.querySelector("[data-icon='masterCard']")

    expect(icon).toBeInTheDocument()
  })

  test('Test if the component is displaying the correct format', () => {
    const fakeProps: props = {
      from: 'MasterCard',
      lastDigits: 1234
    }

    render(<CreditCard {...fakeProps} />)
    const text = screen.getByText(`•••• •••• •••• ${fakeProps.lastDigits}`)

    expect(text).toBeInTheDocument()
  })
})

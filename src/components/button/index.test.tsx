import { render, screen, fireEvent } from '@testing-library/react'
import { colors } from '../../common'
import { Button, props } from './index'

describe('Testing button component', () => {
  test('Given button content is rendering', () => {
    const fakeProps: props = {
      content: 'Test content',
      isBG: false,
      onClick: () => {}
    }
    render(<Button {...fakeProps} />)
    const text = screen.getByText(fakeProps.content)

    expect(text).toBeInTheDocument()
  })

  test('Test if isBG is false', () => {
    const fakeProps: props = {
      content: 'Test content',
      isBG: false,
      onClick: () => {}
    }
    render(<Button {...fakeProps} />)

    const button = screen.getByRole('button')
    const text = screen.getByText(fakeProps.content)

    const buttonStyles = window.getComputedStyle(button)
    const textStyles = window.getComputedStyle(text)

    expect(buttonStyles.backgroundColor).toBe('transparent')
    expect(textStyles.color).toBe(colors.blue)
  })

  test('Test if isBG is true', () => {
    const fakeProps: props = {
      content: 'Test content',
      isBG: true,
      onClick: () => {}
    }
    render(<Button {...fakeProps} />)

    const button = screen.getByRole('button')
    const text = screen.getByText(fakeProps.content)

    const buttonStyles = window.getComputedStyle(button)
    const textStyles = window.getComputedStyle(text)

    expect(buttonStyles.backgroundColor).toBe(colors.blue)
    expect(textStyles.color).toBe(colors.white)
  })

  test('Test onClick', () => {
    const fakeProps: props = {
      content: 'Test content',
      isBG: true,
      onClick: jest.fn()
    }
    render(<Button {...fakeProps} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeProps.onClick).toHaveBeenCalledTimes(1)
  })
})

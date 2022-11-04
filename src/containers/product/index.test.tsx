import { render, screen, fireEvent } from '@testing-library/react'
import { Icons } from '../../components'
import { Product, ProductPropsType } from './index'

describe('Tetsing Product container', () => {
  test('Test if the component is renderign the title', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: []
    }
    render(<Product {...fakeProps} />)

    const title = screen.getByText(fakeProps.title)

    expect(title).toBeInTheDocument()
  })

  test('Test if the component is renderign the description', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: []
    }
    render(<Product {...fakeProps} />)

    const description = screen.getByText(fakeProps.description)

    expect(description).toBeInTheDocument()
  })

  test('Test if the component is rendering the features', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: [
        {
          title: 'Schedule an Appointment',
          description: 'Easy scheduling of an appointment',
          Icon: Icons.SvgCalendar
        },
        {
          title: 'Schedule an Appointment',
          description: 'Easy scheduling of an appointment',
          Icon: Icons.SvgCalendar
        }
      ]
    }
    const { container } = render(<Product {...fakeProps} />)
    const featuresQty = container.getElementsByClassName('flex')[0].children.length

    expect(featuresQty).toEqual(fakeProps.features.length)
  })

  test('Test onTerms', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: []
    }
    render(<Product {...fakeProps} />)

    const button = screen.getByText('Additional Terms')
    fireEvent.click(button)
    expect(fakeProps.onTerms).toHaveBeenCalledTimes(1)
  })

  test('Test onCancel', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: []
    }
    render(<Product {...fakeProps} />)

    const button = screen.getByText('CANCEL')
    fireEvent.click(button)
    expect(fakeProps.onCancel).toHaveBeenCalledTimes(1)
  })

  test('Test onContinue', () => {
    const fakeProps: ProductPropsType = {
      title: 'Test title',
      onCancel: jest.fn(),
      onTerms: jest.fn(),
      onContinue: jest.fn(),
      description: 'Introducing our cool new product which is specifically designed for take home problem!',
      features: []
    }
    render(<Product {...fakeProps} />)

    const button = screen.getByText('ADD NOW')
    fireEvent.click(button)
    expect(fakeProps.onContinue).toHaveBeenCalledTimes(1)
  })
})

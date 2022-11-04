import { render, screen } from '@testing-library/react'
import { SvgCalendar } from '../icons'
import { Feature, props } from './index'

describe('Testing feature component', () => {
  test('The given title is rendering', () => {
    const fakeProps: props = {
      title: 'test title',
      description: 'test description',
      Icon: SvgCalendar
    }

    render(<Feature {...fakeProps} />)
    const title = screen.getByText(fakeProps.title)

    expect(title).toBeInTheDocument()
  })

  test('The given description is rendering', () => {
    const fakeProps: props = {
      title: 'test title',
      description: 'test description',
      Icon: SvgCalendar
    }

    render(<Feature {...fakeProps} />)
    const description = screen.getByText(fakeProps.description)

    expect(description).toBeInTheDocument()
  })

  test('The given description is rendering', () => {
    const fakeProps: props = {
      title: 'test title',
      description: 'test description',
      Icon: SvgCalendar
    }

    render(<Feature {...fakeProps} />)
    const description = screen.getByText(fakeProps.description)

    expect(description).toBeInTheDocument()
  })

  test('The given svg is rendering', () => {
    const fakeProps: props = {
      title: 'test title',
      description: 'test description',
      Icon: SvgCalendar
    }

    const { container } = render(<Feature {...fakeProps} />)
    const icon = container.querySelector("[data-icon='calendar']")

    expect(icon).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { texts, colors } from '../../common'
import { DynamicText, DynamicTextPropTypes } from './index'

describe('DynamicText test', () => {
  test('Given text is rendering', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a test',
      color: colors.white,
      weight: 'normal',
      type: 'h1'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )
    const text = screen.getByText(fakeProps.content)
    expect(text).toBeInTheDocument()
  })

  test('Given text is rendering with the correct color', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a test',
      color: 'red',
      weight: 'normal',
      type: 'h1'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )
    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(styles.color).toBe(fakeProps.color)
  })

  test('Testing title', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a title test',
      color: 'red',
      weight: 'normal',
      type: 'h1'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByRole('heading', { level: 1 })
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontSize).toBe(String(texts.textSize.h1) + 'px')
  })

  test('Testing subtitle', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a title test',
      color: 'red',
      weight: 'normal',
      type: 'h2'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByRole('heading', { level: 2 })
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontSize).toBe(String(texts.textSize.h2) + 'px')
  })

  test('Testing normal text', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'normal',
      type: 'normal'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontSize).toBe(String(texts.textSize.normal) + 'px')
  })

  test('Testing small text', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'normal',
      type: 'small'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontSize).toBe(String(texts.textSize.small) + 'px')
  })

  test('Testing tiny text', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'normal',
      type: 'tiny'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontSize).toBe(String(texts.textSize.tiny) + 'px')
  })

  test('Testing normal weight', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'normal',
      type: 'normal'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontWeight).toBe(String(texts.textWeight.normal))
  })

  test('Testing bold weight', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'bold',
      type: 'normal'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontWeight).toBe(String(texts.textWeight.bold))
  })

  test('Testing extraBold weight', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'extraBold',
      type: 'normal'
    }
    render(
            <DynamicText
               {...fakeProps}
            />
    )

    const text = screen.getByText(fakeProps.content)
    const styles = window.getComputedStyle(text)

    expect(text).toBeInTheDocument()
    expect(styles.fontWeight).toBe(String(texts.textWeight.extraBold))
  })

  test('Testing className prop', () => {
    const fakeProps: DynamicTextPropTypes = {
      content: 'This is a normal text',
      color: 'red',
      weight: 'extraBold',
      type: 'normal'
    }
    const clasName: string = 'testing-class'
    const { container } = render(
      <DynamicText
          {...fakeProps}
          className={clasName}
      />
    )

    expect(container.getElementsByClassName(clasName)[0]).toBeInTheDocument()
  })
})

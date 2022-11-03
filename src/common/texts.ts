interface textWeightType {
  normal: string
  bold: string
  extraBold: string
}

interface textSizeType {
  h1: string
  h2: string
  normal: string
  small: string
  tiny: string
}

export const textWeight: textWeightType = {
  normal: '400',
  bold: '600',
  extraBold: '700'
}

export const textSize: textSizeType = {
  h1: '28',
  h2: '20',
  normal: '16',
  small: '14',
  tiny: '12'
}

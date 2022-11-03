interface textWeightType {
  normal: number
  bold: number
  extraBold: number
}

interface textSizeType {
  h1: number
  h2: number
  normal: number
  small: number
  tiny: number
}

export const textWeight: textWeightType = {
  normal: 400,
  bold: 600,
  extraBold: 700
}

export const textSize: textSizeType = {
  h1: 28,
  h2: 20,
  normal: 16,
  small: 14,
  tiny: 12
}

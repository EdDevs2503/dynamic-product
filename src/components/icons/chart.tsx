import { SVGProps } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={26}
    viewBox="0 0 40 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 25.98L15 13.96L23 21.96L40 2.84L37.18 0.0200043L23 15.96L15 7.96L0 22.98L3 25.98Z"
      fill="#114A9B"
    />
  </svg>
)

import { SVGProps } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SvgTriangule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={6}
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.0602417L5 5.06024L10 0.0602417H0Z" fill="#114A9B" />
  </svg>
)

import { ReactElement, SVGProps } from 'react'

export const SvgCalendar = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width={40}
    height={44}
    viewBox="0 0 40 44"
    data-icon="calendar"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36 4H34V0H30V4H10V0H6V4H4C1.8 4 0 5.8 0 8V40C0 42.2 1.8 44 4 44H36C38.2 44 40 42.2 40 40V8C40 5.8 38.2 4 36 4ZM36 40H4V14H36V40Z"
    />
  </svg>
)

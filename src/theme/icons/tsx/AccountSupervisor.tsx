import { SVGProps, memo } from 'react';

const SvgAccountSupervisor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 12a2.5 2.5 0 100-5.001 2.5 2.5 0 000 5.001zM9 11a3 3 0 100-6 3 3 0 000 6zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountSupervisor);
export default Icon;
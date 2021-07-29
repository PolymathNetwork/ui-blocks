import { SVGProps, memo } from 'react';

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 21h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S13 13.19 13 14.25V21H9V9h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V21zM7 21H3V9h4v12zM5 3a2 2 0 110 4 2 2 0 010-4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgLinkedin);
export default Icon;

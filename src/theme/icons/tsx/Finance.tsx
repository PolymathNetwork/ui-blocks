import { SVGProps, memo } from 'react';

const SvgFinance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 13h4v10H3V13zm7 1h4v9h-4v-9zm7-5h4v14h-4V9zm0-8h4v4h-1V3.06l-8.03 8.03L8 7.12l-4.6 4.6-1.06-1.06L8 5l3.97 3.97L18.94 2H17V1z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFinance);
export default Icon;

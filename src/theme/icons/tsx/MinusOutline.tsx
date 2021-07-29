import { SVGProps, memo } from 'react';

const SvgMinusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9v6H4V9h16zM6 11v2h12v-2H6z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgMinusOutline);
export default Icon;

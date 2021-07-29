import { SVGProps, memo } from 'react';

const SvgDistribution = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 1v3H6a3 3 0 00-3 3v2.172a3 3 0 000 5.656V17a3 3 0 003 3h8v3l4-4-4-4v3H6a1 1 0 01-1-1v-2.17A2.99 2.99 0 006.83 13H19v3l4-4-4-4v3H6.83A2.99 2.99 0 005 9.17V7a1 1 0 011-1h8v3l4-4-4-4zM4 13a1 1 0 100-2 1 1 0 000 2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDistribution);
export default Icon;

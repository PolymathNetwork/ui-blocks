import { SVGProps, memo } from 'react';

const SvgAccountMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4zM1 10v2h8v-2H1zm14 2a4 4 0 100-8 4 4 0 000 8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountMinus);
export default Icon;

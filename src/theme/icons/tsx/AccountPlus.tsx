import { SVGProps, memo } from 'react';

const SvgAccountPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4zm-9-4V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 2a4 4 0 100-8 4 4 0 000 8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountPlus);
export default Icon;

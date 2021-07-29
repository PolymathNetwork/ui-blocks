import { SVGProps, memo } from 'react';

const SvgKeyPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 3c1.96 0 3.63 1.25 4.24 3H22v3h-4v3h-3V9h-4.26c-.61 1.75-2.28 3-4.24 3C4 12 2 10 2 7.5S4 3 6.5 3zm0 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 17h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgKeyPlus);
export default Icon;

import { SVGProps, memo } from 'react';

const SvgKeyArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.7 6c-.6-1.8-2.3-3-4.2-3C4 3 2 5 2 7.5S4 12 6.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h4V6H10.7zM6.5 9C5.7 9 5 8.3 5 7.5S5.7 6 6.5 6 8 6.7 8 7.5 7.3 9 6.5 9zM13 21v-2H8v-2h5v-2l3 3-3 3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgKeyArrowRight);
export default Icon;

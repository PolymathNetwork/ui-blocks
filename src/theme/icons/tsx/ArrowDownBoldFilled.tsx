import { SVGProps, memo } from 'react';

const SvgArrowDownBoldFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 11L12 21 2 11h6V3h8v8h6z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgArrowDownBoldFilled);
export default Icon;

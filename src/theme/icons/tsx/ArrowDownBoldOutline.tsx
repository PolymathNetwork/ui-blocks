import { SVGProps, memo } from 'react';

const SvgArrowDownBoldOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 11L12 21 2 11h6V3h8v8h6zm-10 7l5-5h-3V5h-4v8H7l5 5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowDownBoldOutline);
export default Icon;

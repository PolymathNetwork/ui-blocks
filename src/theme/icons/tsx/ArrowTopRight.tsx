import { SVGProps, memo } from 'react';

const SvgArrowTopRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowTopRight);
export default Icon;

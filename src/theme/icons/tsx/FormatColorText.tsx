import { SVGProps, memo } from 'react';

const SvgFormatColorText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.62 12L12 5.67 14.37 12H9.62zM11 3L5.5 17h2.25l1.12-3h6.25l1.13 3h2.25L13 3h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFormatColorText);
export default Icon;

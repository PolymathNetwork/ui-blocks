import { SVGProps, memo } from 'react';

const SvgArrowCollapseUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.08 11.92L12 4l7.92 7.92-1.42 1.41-5.5-5.5V22h-2V7.83l-5.5 5.5-1.42-1.41zM12 4h10V2H2v2h10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowCollapseUp);
export default Icon;

import { SVGProps, memo } from 'react';

const SvgEmailOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2zm8 7l8-5H4l8 5zm-8 7h16V8.37l-8 4.99-8-4.99V18z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgEmailOutline);
export default Icon;

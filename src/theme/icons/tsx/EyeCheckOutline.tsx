import { SVGProps, memo } from 'react';

const SvgEyeCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.5 17l-5 5-3.5-3.5 1.5-1.5 2 2 3.5-3.5 1.5 1.5zM12 9a3 3 0 110 6 3 3 0 010-6zm0-4.5c5 0 9.27 3.11 11 7.5-.25.65-.56 1.26-.92 1.85a5.77 5.77 0 00-1.9-.73l.64-1.12a9.821 9.821 0 00-17.64 0A9.821 9.821 0 0012 17.5l1.21-.07c-.14.5-.21 1.03-.21 1.57v.46l-1 .04c-5 0-9.27-3.11-11-7.5 1.73-4.39 6-7.5 11-7.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgEyeCheckOutline);
export default Icon;

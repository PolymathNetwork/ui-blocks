import { SVGProps, memo } from 'react';

const SvgAccountNetwork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 17v2h1a1 1 0 011 1h7v2h-7a1 1 0 01-1 1h-4a1 1 0 01-1-1H2v-2h7a1 1 0 011-1h1v-2H5v-1.5c0-1.93 3.13-3.5 7-3.5s7 1.57 7 3.5V17h-6zM12 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountNetwork);
export default Icon;

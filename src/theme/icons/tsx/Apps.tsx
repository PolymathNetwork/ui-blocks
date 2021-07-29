import { SVGProps, memo } from 'react';

const SvgApps = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 20h4v-4h-4v4zm0-6h4v-4h-4v4zm-6-6h4V4h-4v4zm6 0h4V4h-4v4zm-6 6h4v-4h-4v4zm-6 0h4v-4H4v4zm0 6h4v-4H4v4zm6 0h4v-4h-4v4zM4 8h4V4H4v4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgApps);
export default Icon;

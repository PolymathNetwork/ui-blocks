import { SVGProps, memo } from 'react';

const SvgViewDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 3v6h8V3h-8zm0 18h8V11h-8v10zM3 21h8v-6H3v6zm0-8h8V3H3v10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgViewDashboard);
export default Icon;

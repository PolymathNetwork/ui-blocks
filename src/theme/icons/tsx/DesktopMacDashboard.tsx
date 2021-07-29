import { SVGProps, memo } from 'react';

const SvgDesktopMacDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 14V4H3v10h18zm0-12a2 2 0 012 2v12a2 2 0 01-2 2h-7l2 3v1H8v-1l2-3H3a2 2 0 01-2-2V4c0-1.11.89-2 2-2h18zM4 5h11v5H4V5zm12 0h4v2h-4V5zm4 3v5h-4V8h4zM4 11h5v2H4v-2zm6 0h5v2h-5v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDesktopMacDashboard);
export default Icon;

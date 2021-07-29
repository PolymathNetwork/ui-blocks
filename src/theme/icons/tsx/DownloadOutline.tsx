import { SVGProps, memo } from 'react';

const SvgDownloadOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDownloadOutline);
export default Icon;

import { SVGProps, memo } from 'react';

const SvgProgressUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 2.03c4.73.47 8.5 4.22 8.95 8.97A9.976 9.976 0 0113 21.93v-2c3.64-.43 6.5-3.32 6.96-6.96A7.994 7.994 0 0013 4.05V2.03zm-2 .03v2c-1.43.2-2.78.78-3.9 1.68L5.67 4.26A9.827 9.827 0 0111 2.06zM4.26 5.67L5.69 7.1A8.017 8.017 0 004.05 11h-2c.2-1.96.95-3.81 2.21-5.33zM2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43A10.04 10.04 0 012.06 13zm5.04 5.37c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26l1.43-1.37zM12 7.5L7.5 12H11v4h2v-4h3.5L12 7.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgProgressUpload);
export default Icon;

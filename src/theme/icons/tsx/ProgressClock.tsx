import { SVGProps, memo } from 'react';

const SvgProgressClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93-.45-4.75-4.22-8.5-8.95-8.97zm-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2zM4.26 5.67A9.885 9.885 0 002.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 014.06 13h-2zm5.04 5.37l-1.43 1.37A9.994 9.994 0 0011 22v-2a8.002 8.002 0 01-3.9-1.63zM12.5 7v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgProgressClock);
export default Icon;

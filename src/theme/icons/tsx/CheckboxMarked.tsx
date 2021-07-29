import { SVGProps, memo } from 'react';

const SvgCheckboxMarked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8l-9 9zm9-14H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
      fill="#1348E4"
    />
  </svg>
);

const Icon = memo(SvgCheckboxMarked);
export default Icon;

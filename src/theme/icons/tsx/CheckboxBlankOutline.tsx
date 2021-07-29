import { SVGProps, memo } from 'react';

const SvgCheckboxBlankOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 2v14H5V5h14z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckboxBlankOutline);
export default Icon;

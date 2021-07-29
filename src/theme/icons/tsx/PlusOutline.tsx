import { SVGProps, memo } from 'react';

const SvgPlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 9h5V4h6v5h5v6h-5v5H9v-5H4V9zm7 4v5h2v-5h5v-2h-5V6h-2v5H6v2h5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgPlusOutline);
export default Icon;

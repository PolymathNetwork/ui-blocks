import { SVGProps, memo } from 'react';

const SvgAlertCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm1-5C6.47 2 2 6.5 2 12A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAlertCircleOutline);
export default Icon;

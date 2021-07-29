import { SVGProps, memo } from 'react';

const SvgAccountCash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm0 6.72V20H0v-2c0-2.21 3.13-4 7-4 1.5 0 2.87.27 4 .72zM24 20H13V3h11v17zm-8-8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zM22 7a2 2 0 01-2-2h-3c0 1.11-.89 2-2 2v9a2 2 0 012 2h3c0-1.1.9-2 2-2V7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountCash);
export default Icon;

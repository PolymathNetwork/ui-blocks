import { SVGProps, memo } from 'react';

const SvgLockOpenVariantOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 13a2 2 0 012 2c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2a2 2 0 012-2zm8-12c-2.76 0-5 2.24-5 5v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h2V6c0-2.76-2.24-5-5-5zm-2 9v10H4V10h12z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgLockOpenVariantOutline);
export default Icon;

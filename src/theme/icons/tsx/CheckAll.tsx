import { SVGProps, memo } from 'react';

const SvgCheckAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.41 13.41L6 19l1.41-1.42L1.83 12 .41 13.41zm21.83-7.83L11.66 16.17 7.5 12l-1.43 1.41L11.66 19l12-12-1.42-1.42zM18 7l-1.41-1.42-6.35 6.35 1.42 1.41L18 7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckAll);
export default Icon;

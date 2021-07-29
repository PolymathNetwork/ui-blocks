import { SVGProps, memo } from 'react';

const SvgSeal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.39 19.37L16.38 18 15 22l-3.08-6L9 22l-1.38-4-4.01 1.37 2.92-6a7 7 0 1110.94 0l2.92 6zM7 9l2.69 1.34-.19 3 2.5-1.66 2.5 1.65-.17-2.99L17 9l-2.68-1.35.18-2.98L12 6.31 9.5 4.65l.17 3.01L7 9z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSeal);
export default Icon;
